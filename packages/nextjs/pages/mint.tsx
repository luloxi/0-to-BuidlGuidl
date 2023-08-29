// import Image from "next/image";
// import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center mt-6 p-4">
        <h1 className="text-6xl">Mint this dynamic NFT!</h1>
      </div>
    </>
  );
};

export default Home;
