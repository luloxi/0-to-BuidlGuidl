import Image from "next/image";
// import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-6xl mb-4 text-center">Share this page!</h1>
        <Image
          alt="QR code pointing to 0-to-buidlguidl.vercel.app"
          src="/qr.png"
          width={500}
          height={500}
          className="max-w-xs rounded-lg shadow-2xl "
        />
        <p>Add a way to easily copy the URL to this page and share to social buttons?</p>
      </div>
    </>
  );
};

export default Home;
