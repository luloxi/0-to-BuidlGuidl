// import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  const { writeAsync: mintNft } = useScaffoldContractWrite({
    contractName: "MoodNft",
    functionName: "mintNft",
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
        <h1 className="text-5xl">Mint this dynamic NFT!</h1>
        <p className="text-xl max-w-lg">UNDER CONSTRUCTION, will deploy soon!</p>
      </div>

      {/* <div className="flex gap-3 justify-center">
        Your NFT has a tokenURI? {tokenURI ? <>{tokenURI}</> : <>"You don't have an NFT"</>}
      </div> */}
      <div className="flex gap-3 justify-center">
        <button className="btn btn-accent" onClick={() => mintNft()}>
          Mint a MoodNFT!
        </button>
        <Link href={"./seecollection"}>
          <button className="btn btn-primary">See collection!</button>
        </Link>
      </div>
      {/* <NFTContainer connectedAddress={connectedAddress} /> */}
    </>
  );
};

export default Home;
