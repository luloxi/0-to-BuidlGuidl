    // SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {ERC721} from "solady/src/tokens/ERC721.sol";
import {LibString} from "solady/src/utils/LibString.sol";
import {Base64} from "solady/src/utils/Base64.sol";

error ZeroToBuidlGuidlNFT__CantSwitchThemeIfNotOwner();
error ZeroToBuidlGuidlNFT__CantTransferIfNotOwner();
error ZeroToBuidlGuidlNFT__KeepIt_YouNeedItMore();
error ZeroToBuidlGuidlNFT__NoBalanceToWithdraw();
error ZeroToBuidlGuidlNFT__WithdrawFailed();

enum Theme {
    DARK,
    LIGHT
}

struct MintInfo {
    Theme theme;
    address minter;
    uint128 mintBlock;
    uint128 donationAmt;
}

// @dev This contract is a fork of the original ZeroToBuidlGuidlNFT contract with gas optimizations suggested by @McToady in this repo: https://github.com/McCoady/zero-to-bg-gas-audit/

contract ZeroToBuidlGuidlNFTv2 is ERC721 {
    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                      STATE VARIABLES                       */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    address private constant CURATOR_ADDRESS = 0xfBD9Ca40386A8C632cf0529bbb16b4BEdB59a0A0;
    address private constant BUIDLGUIDL_ADDRESS = 0x97843608a00e2bbc75ab0C1911387E002565DEDE;
    IReverseRecords private immutable ensReverseRecords;

    uint256 private totalSupply;

    mapping(uint256 => MintInfo) private s_tokenIdToMintInfo;

    constructor(address _reverseRecordsAddress) {
        totalSupply = 0;
        ensReverseRecords = IReverseRecords(_reverseRecordsAddress);
    }

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                      TOKEN DYNAMICS                        */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    /// @dev Mints a new NFT and sends the donation to the contract
    function mintNft() public payable {
        if (msg.value < 0.01 ether) {
            revert ZeroToBuidlGuidlNFT__KeepIt_YouNeedItMore();
        }

        uint256 thisId = totalSupply;

        _safeMint(msg.sender, thisId);

        s_tokenIdToMintInfo[thisId] = MintInfo(Theme.DARK, msg.sender, uint128(block.number), uint128(msg.value));

        totalSupply = totalSupply + 1;
    }

    /// @dev If ETH is sent to this contract,  it attempts to mint a new NFT and store the donation
    receive() external payable {
        mintNft();
    }

    /// @dev If ETH is sent with an incorrect function signature, it attempts to mint a new NFT and store the donation
    fallback() external payable {
        mintNft();
    }

    /// @dev Transfers `tokenId` from `from` to `to`.
    function transfer(address to, uint256 tokenId) public {
        if (!_isApprovedOrOwner(msg.sender, tokenId)) {
            revert ZeroToBuidlGuidlNFT__CantTransferIfNotOwner();
        }

        _transfer(msg.sender, to, tokenId);
    }

    /// @dev Switches the theme of the NFT between dark and light
    function switchTheme(uint256 tokenId) public {
        if (!_isApprovedOrOwner(msg.sender, tokenId)) {
            revert ZeroToBuidlGuidlNFT__CantSwitchThemeIfNotOwner();
        }

        if (s_tokenIdToMintInfo[tokenId].theme == Theme.DARK) {
            s_tokenIdToMintInfo[tokenId].theme = Theme.LIGHT;
        } else {
            s_tokenIdToMintInfo[tokenId].theme = Theme.DARK;
        }
    }

    /// @dev Sends contract funds to curator and buidlguidl
    function withdrawFunds() public {
        uint256 contractBalance = address(this).balance;
        if (contractBalance == 0) {
            revert ZeroToBuidlGuidlNFT__NoBalanceToWithdraw();
        }

        uint256 curatorShare = contractBalance / 2;
        uint256 buidlGuidlShare = contractBalance - curatorShare;

        (bool curatorSuccess,) = payable(CURATOR_ADDRESS).call{value: curatorShare}("");
        if (!curatorSuccess) {
            revert ZeroToBuidlGuidlNFT__WithdrawFailed();
        }

        (bool buidlguidlSuccess,) = payable(BUIDLGUIDL_ADDRESS).call{value: buidlGuidlShare}("");
        if (!buidlguidlSuccess) {
            revert ZeroToBuidlGuidlNFT__WithdrawFailed();
        }
    }

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                      ERC721 METADATA                       */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    /// @dev Returns the token collection name.
    function name() public pure override returns (string memory) {
        return "0-to-BuidlGuidl Donation";
    }

    /// @dev Returns the token collection symbol.
    function symbol() public pure override returns (string memory) {
        return "02BG";
    }

    /// @dev Returns the Uniform Resource Identifier (URI) for token `id`.
    function tokenURI(uint256 id) public view override returns (string memory) {
        return _buildTokenURI(id);
    }

    /// @dev Constructs the encoded svg string to be returned by tokenURI()
    function _buildTokenURI(uint256 id) internal view returns (string memory) {
        address tokenMinter = s_tokenIdToMintInfo[id].minter;
        uint256 mintedBlockNumber = s_tokenIdToMintInfo[id].mintBlock;
        uint256 donatedAmount = s_tokenIdToMintInfo[id].donationAmt;

        Theme currentTheme = s_tokenIdToMintInfo[id].theme;
        string memory backgroundColor = (currentTheme == Theme.DARK) ? "#2A3655" : "#F5F5F5";
        string memory textColor = (currentTheme == Theme.DARK) ? "#F5F5F5" : "#2A3655";

        bytes memory image = abi.encodePacked(
            "data:image/svg+xml;base64,",
            Base64.encode(
                bytes(
                    abi.encodePacked(
                        '<?xml version="1.0" encoding="UTF-8"?>',
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">',
                        '<style type="text/css"><![CDATA[text {font-family: monospace; font-size: 21px; fill: ',
                        textColor,
                        ";} .h1 {font-size: 40px; font-weight: 600; fill: ",
                        textColor,
                        ";}]]></style>",
                        '<rect width="400" height="400" fill="',
                        backgroundColor,
                        '" />',
                        '<text x="20" y="30">On block #',
                        LibString.toString(mintedBlockNumber),
                        "</text>",
                        '<text x="20" y="70" style="font-size:28px; font-weight: 600;"> ',
                        lookupENSName(tokenMinter),
                        "</text>",
                        '<text x="20" y="90" style="font-size:14px;">0x',
                        addressToString(tokenMinter),
                        "</text>",
                        '<text x="20" y="130">found wisdom in</text>',
                        '<text class="h1" x="20" y="175">0 to BuidlGuidl</text>',
                        unicode'<text x="20" y="210">and donated Ξ ',
                        weiToEtherString(donatedAmount),
                        "</text>",
                        unicode'<text x="40" y="295" style="font-size:70px;">🐣...🏰</text>',
                        unicode'<text x="20" y="350">Thanks for the wei,</text>',
                        unicode'<text x="20" y="380">and good luck on your way!</text>',
                        "</svg>"
                    )
                )
            )
        );

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name":"',
                            name(),
                            '", "image":"',
                            image,
                            unicode'", "description": "Consider this NFT as an eternal thank you note for your donation. Hope to see you building with us in the future! <3"}'
                        )
                    )
                )
            )
        );
    }

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                      HELPER FUNCTIONS                      */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    /// @notice Returns the current token counter
    function getTokenCounter() public view returns (uint256) {
        return totalSupply;
    }

    /// @notice Checks ENS reverse records if address has an ens name, else returns blank string
    function lookupENSName(address addr) public view returns (string memory) {
        address[] memory t = new address[](1);
        t[0] = addr;
        string[] memory results = ensReverseRecords.getNames(t);
        return results[0];
    }

    /// @notice Converts address to string
    function addressToString(address x) internal pure returns (string memory) {
        bytes memory s = new bytes(40);
        for (uint256 i = 0; i < 20; i++) {
            bytes1 b = bytes1(uint8(uint256(uint160(x)) / (2 ** (8 * (19 - i)))));
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
            s[2 * i] = char(hi);
            s[2 * i + 1] = char(lo);
        }
        return string(s);
    }

    /// @notice Converts a single-byte `b` into its ASCII character representation.
    /// @param b The input byte.
    /// @return c The ASCII character byte.
    function char(bytes1 b) internal pure returns (bytes1 c) {
        if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
        else return bytes1(uint8(b) + 0x57);
    }

    /// @notice  Converts wei to ether string with 2 decimal places
    function weiToEtherString(uint256 amountInWei) internal pure returns (string memory) {
        uint256 amountInFinney = amountInWei / 1e15; // 1 finney == 1e15
        return string(
            abi.encodePacked(
                LibString.toString(amountInFinney / 1000), // integer (left of decimal)
                ".",
                LibString.toString((amountInFinney % 1000) / 100), // first decimal
                LibString.toString(((amountInFinney % 1000) % 100) / 10) // second decimal
            )
        );
    }
}

/// @notice ENS reverse record contract for resolving address to ENS name
/// https://github.com/ensdomains/reverse-records/blob/master/contracts/ReverseRecords.sol
interface IReverseRecords {
    function getNames(address[] calldata addresses) external view returns (string[] memory r);
}
