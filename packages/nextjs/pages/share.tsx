import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center mt-6">
        <Image
          alt="QR code pointing to 0-to-buidlguidl.vercel.app"
          src="/qr.png"
          width={500}
          height={500}
          className="max-w-sm rounded-lg shadow-2xl "
        />
        <p>Add a way to easily copy the URL to this page and share to social buttons?</p>
      </div>
    </>
  );
};

export default Home;
