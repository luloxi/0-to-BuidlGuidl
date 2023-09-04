// import Image from "next/image";
import { useState } from "react";
// import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import NFTContainer from "~~/components/0-to-BuidlGuidl/NFTContainer";
import { MetaHeader } from "~~/components/MetaHeader";
import { EtherInput } from "~~/components/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [mintValue, setMintValue] = useState<string>("0"); // Initialize with a default value

  const { address: connectedAddress } = useAccount();

  const { writeAsync: mintNft } = useScaffoldContractWrite({
    contractName: "MoodNft",
    functionName: "mintNft",
    value: `${mintValue ? parseInt(mintValue) : 0}` as `${number}`,
  });

  // const { data: tokenURI } = useScaffoldContractRead({
  //   contractName: "MoodNft",
  //   functionName: "tokenURI",
  //   args: [BigInt(0)],
  // });

  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-5xl">Donate and get an NFT!</h1>
        <p className="text-lg max-w-lg">
          If you found this repo useful, please consider a donation.
          <br /> Half of the funds go to lulox.eth, curator of this page, and half goes to buidlguidl.eth, to keep
          funding public goods.
        </p>
      </div>

      {/* <div className="flex gap-3 justify-center">
        Your NFT has a tokenURI? {tokenURI ? <>{tokenURI}</> : <>"You don't have an NFT"</>}
      </div> */}
      {/* <div className="flex gap-3 justify-center ">
        <button className="btn btn-accent" onClick={() => mintNft()}>
          Mint a MoodNFT!
        </button>

        <Link href={"./seecollection"}>
          <button className="btn btn-primary">See collection!</button>
        </Link>
      </div> */}
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
