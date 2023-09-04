// import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import NFTContainer from "~~/components/0-to-BuidlGuidl/NFTContainer";
import { MetaHeader } from "~~/components/MetaHeader";
import { EtherInput } from "~~/components/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const [mintValue, setMintValue] = useState<string>("0.05");

  const { writeAsync: mintNft } = useScaffoldContractWrite({
    contractName: "ZeroToBuidlGuidlNFT",
    functionName: "mintNft",
    value: `${parseFloat(mintValue)}`,
  });

  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-5xl">Donate and get an NFT!</h1>
        <p className="text-lg max-w-lg text-center">
          If you found this repo useful, please consider a donation.
          <br />
          <span className="text-sm text-center">(minimum is 0.01 ETH, else you need it more than us 😜)</span>
        </p>

        <p className="text-lg max-w-lg text-center">
          Half of the funds go to{" "}
          <Link
            className="underline"
            href="https://app.buidlguidl.com/builders/0xfBD9Ca40386A8C632cf0529bbb16b4BEdB59a0A0"
          >
            lulox.eth
          </Link>
          , curator of this page, and half goes to{" "}
          <Link className="underline" href="https://buidlguidl.com/">
            buidlguidl.eth
          </Link>
          , to keep funding public goods.
        </p>
      </div>

      <div className="flex justify-center items-center gap-3">
        <div className="inline-block">
          <EtherInput value={mintValue.toString()} onChange={(newValue: string) => setMintValue(newValue.toString())} />
        </div>
        <button className="btn btn-accent" onClick={() => mintNft()}>
          Mint NFT!
        </button>
      </div>

      <NFTContainer connectedAddress={connectedAddress} />
    </>
  );
};

export default Home;
