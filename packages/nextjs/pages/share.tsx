import { useState } from "react";
import Image from "next/image";
import copy from "clipboard-copy";
// You can import a copy icon from Heroicons or any other icon library you prefer
// import Link from "next/link";
import type { NextPage } from "next";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Copy } from "@heroicons/react/24/solid";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  const [copied, setCopied] = useState(false);
  const url = "https://0-to-buidlguidl.vercel.app";

  const handleCopy = () => {
    copy(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-5xl text-center">Share this page!</h1>
        <p className="text-xl max-w-lg">Get a friend started into ETH dApps development!</p>
        <Image
          alt="QR code pointing to 0-to-buidlguidl.vercel.app"
          src="/qr.png"
          width={500}
          height={500}
          className="max-w-xs rounded-lg "
        />
        <div className="flex items-center my-4 space-x-2">
          <input
            type="text"
            value={url}
            readOnly
            placeholder="https://0-to-buidlguidl.vercel.app"
            className="p-2 border rounded-lg w-60 text-primary"
            // onClick={(e) => e.target.select()}
          />
          <CopyToClipboard text={url}>
            <button
              onClick={handleCopy}
              className={`p-2 rounded-lg ${
                copied ? "bg-green-500" : "bg-blue-500"
              } text-white flex items-center focus:outline-none`}
            >
              {/* <CopyIcon className="w-4 h-4 mr-2" /> */}
              {copied ? "Copied!" : "Copy link"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};

export default Home;
