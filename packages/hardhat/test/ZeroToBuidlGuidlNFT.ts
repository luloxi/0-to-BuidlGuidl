import { expect } from "chai";
import { ethers } from "hardhat";
import { ZeroToBuidlGuidlNFT } from "../typechain-types";

describe("ZeroToBuidlGuidlNFT", function () {
  // We define a fixture to reuse the same setup in every test.

  let zeroToBuidlGuidlNFT: ZeroToBuidlGuidlNFT;
  let owner: any;
  let user1: any;

  const CURATOR_ADDRESS = "0xfBD9Ca40386A8C632cf0529bbb16b4BEdB59a0A0";
  const BUIDLGUIDL_ADDRESS = "0x97843608a00e2bbc75ab0C1911387E002565DEDE";

  const MIN_DONATION_AMOUNT = ethers.utils.parseEther("0.01");

  before(async () => {
    [owner, user1] = await ethers.getSigners();
    const zeroToBuidlGuidlNFTFactory = await ethers.getContractFactory("ZeroToBuidlGuidlNFT");
    zeroToBuidlGuidlNFT = (await zeroToBuidlGuidlNFTFactory.deploy(owner.address)) as ZeroToBuidlGuidlNFT;
    await zeroToBuidlGuidlNFT.deployed();
  });

  describe("Minting NFT", function () {
    it("Should increment the contract balance and update token counter after minting a new NFT", async function () {
      await zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: MIN_DONATION_AMOUNT });
      expect(await zeroToBuidlGuidlNFT.getTokenCounter()).to.equal("1");

      const contractBalance = await ethers.provider.getBalance(zeroToBuidlGuidlNFT.address);
      expect(contractBalance).to.equal(MIN_DONATION_AMOUNT);
    });
    it("Should mint if contract is sent Ether directly", async function () {
      await user1.sendTransaction({ to: zeroToBuidlGuidlNFT.address, value: MIN_DONATION_AMOUNT });
      expect(await zeroToBuidlGuidlNFT.getTokenCounter()).to.equal("2");
    });
    it("Should emit a CreatedNFT event after minting a new NFT", async function () {
      // Should it, really? ERC721 already emits a Transfer event
      await expect(zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: MIN_DONATION_AMOUNT }))
        .to.emit(zeroToBuidlGuidlNFT, "CreatedNFT")
        .withArgs(2); // First token minted gets tokenID 0, so this is the third token minted
    });

    xit("Should revert if donation amount is less than 0.01 ETH", async function () {
      const lessThanMinimumDonationAmount = ethers.utils.parseEther("0.009");
      // Couldn't get custom errors to be used as a reason for reverts in hardhat
      await expect(
        zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: lessThanMinimumDonationAmount }),
      ).to.be.revertedWith("ZeroToBuidlGuidlNFT__KeepIt_YouNeedItMore");
    });
  });
  describe("Switching Theme", function () {
    xit("Should return a different tokenURI after calling switchTheme on a token", async function () {
      await zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: MIN_DONATION_AMOUNT });
      // Failing to get tokenURI, gotta debug this later
      // let originalTokenURI = await zeroToBuidlGuidlNFT.tokenURI(0);
      // await zeroToBuidlGuidlNFT.connect(user1).switchTheme(1);
      // const newTokenURI = await zeroToBuidlGuidlNFT.connect(user1).tokenURI(1);
      // expect(originalTokenURI).to.not.equal(newTokenURI);
    });
    xit("Should only allow the token owner to switch the theme", async function () {
      await zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: MIN_DONATION_AMOUNT });
      await expect(zeroToBuidlGuidlNFT.connect(owner).switchTheme(1)).to.be.revertedWith(
        "ZeroToBuidlGuidlNFT__CantSwitchThemeIfNotOwner",
      );
    });
  });
  describe("Transfering NFT", function () {
    it("Should transfer a token to another user", async function () {
      await zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: MIN_DONATION_AMOUNT });
      await zeroToBuidlGuidlNFT.connect(user1).transfer(owner.address, 1);
      expect(await zeroToBuidlGuidlNFT.ownerOf(1)).to.equal(owner.address);
    });
    xit("Should revert if a user tries to transfer a token that is not theirs", async function () {
      await zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: MIN_DONATION_AMOUNT });
      await expect(zeroToBuidlGuidlNFT.connect(owner).transfer(user1.address, 2)).to.be.revertedWith(
        "ZeroToBuidlGuidlNFT__CantTransferIfNotOwner",
      );
    });
  });

  describe("Withdrawing funds", function () {
    it("Should split the funds correctly after a donation", async function () {
      const originalCuratorBalance = await ethers.provider.getBalance(CURATOR_ADDRESS);
      const originalBuidlGuidlBalance = await ethers.provider.getBalance(BUIDLGUIDL_ADDRESS);
      await zeroToBuidlGuidlNFT.connect(user1).mintNft({ value: MIN_DONATION_AMOUNT });
      await zeroToBuidlGuidlNFT.connect(owner).withdrawFunds();

      const contractBalance = await ethers.provider.getBalance(zeroToBuidlGuidlNFT.address);
      const newCuratorBalance = await ethers.provider.getBalance(CURATOR_ADDRESS);
      const newBuidlGuidlBalance = await ethers.provider.getBalance(BUIDLGUIDL_ADDRESS);
      expect(contractBalance).to.equal(0);
      expect(newCuratorBalance).to.be.equal(newBuidlGuidlBalance);
      expect(newCuratorBalance).to.be.gt(originalCuratorBalance);
      expect(newBuidlGuidlBalance).to.be.gt(originalBuidlGuidlBalance);
    });
    xit("Should revert if there's no balance to withdraw", async function () {
      await expect(zeroToBuidlGuidlNFT.connect(owner).withdrawFunds()).to.be.revertedWith(
        "ZeroToBuidlGuidlNFT__NoFundsToWithdraw",
      );
    });
  });
});
