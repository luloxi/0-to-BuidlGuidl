// import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center mt-6 ">
        <h1 className="text-6xl">Learn the web3 tech stack!</h1>
        <p className="text-xl max-w-lg">
          To be able to create your own projects and qualify for an ETH stream, here are some resources to get you
          started:
        </p>
        <span>
          <Link href="https://ethereum.foundation/ethereum" className="underline">
            What is Ethereum?
          </Link>{" "}
          (1 min read)
        </span>
        <span>
          <Link href="https://ethereum.foundation/infinitegarden" className="underline">
            The Infinite Garden
          </Link>{" "}
          (1 min read)
        </span>
        <span>
          <Link href="https://www.youtube.com/watch?v=PkZNo7MFNFg" className="underline">
            Learn JavaScript - Full Course for Beginners
          </Link>{" "}
          (3 hs video)
        </span>

        <p />
        <h2 className="text-3xl">What can I build?</h2>
      </div>
    </>
  );
};

export default Home;
