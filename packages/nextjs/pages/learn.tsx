import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center mt-6 p-4">
        <h1 className="text-6xl">Learn the web3 tech stack!</h1>
        <div className="flex flex-row items-center gap-3">
          <div>
            <p className="text-xl max-w-lg">
              To be able to create your own projects and qualify for an ETH stream, here are some resources to get you
              started:
            </p>
            <ul>
              <li>
                <Link href="https://ethereum.foundation/ethereum" className="underline">
                  What is Ethereum?
                </Link>{" "}
                (1 min read)
              </li>
              <li>
                <Link href="https://ethereum.foundation/infinitegarden" className="underline">
                  The Infinite Garden
                </Link>{" "}
                (1 min read)
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=PkZNo7MFNFg" className="underline">
                  Learn JavaScript - Full Course for Beginners
                </Link>{" "}
                (3 hs video)
              </li>
            </ul>
          </div>

          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐣</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 p-4">
        <h2 className="text-3xl">
          Got the basics, <strong>now what?</strong>
        </h2>
        <div className="flex flex-row items-center gap-3">
          <div>
            <p className="text-xl max-w-lg">
              To create production ready dApps from scratch using Scaffold-ETH, you need to:
            </p>
            <ul>
              <li>- know about smart contracts and web3</li>
              <li>- develop your own smart contracts</li>
              <li>- create a frontend that interacts with smart contracts</li>
              <li>- make that frontend look nice</li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐥</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 p-4">
        <h2 className="text-3xl">Let's learn about smart contracts then...</h2>
        <div className="flex flex-row items-center gap-3">
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">Take at least one of these courses:</p>
            <ul>
              <li>
                - (Hardhat){" "}
                <Link href="https://www.youtube.com/watch?v=gyMwXuJrbJQ" className="underline">
                  Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript
                </Link>{" "}
                (32 hs course)
              </li>
              <li>
                - (Foundry){" "}
                <Link
                  href="https://www.youtube.com/watch?v=umepbfKp5rI&list=PL4Rj_WH6yLgWe7TxankiqkrkVKXIwOP42"
                  className="underline"
                >
                  Learn Solidity, Blockchain Development, & Smart Contracts | Powered By AI
                </Link>{" "}
                (32 hs course)
              </li>
            </ul>
            <p className="text-xl max-w-lg">Other options:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://learnweb3.io/" className="underline">
                  LearnWeb3DAO
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://solidity-by-example.org/" className="underline">
                  Solidity by Example
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/@smartcontractprogrammer" className="underline">
                  Smart Contract Programmer (YouTube channel)
                </Link>{" "}
              </li>
              <li>
                - (Foundry){" "}
                <Link
                  href="https://www.youtube.com/watch?v=umepbfKp5rI&list=PL4Rj_WH6yLgWe7TxankiqkrkVKXIwOP42"
                  className="underline"
                >
                  Learn Solidity, Blockchain Development, & Smart Contracts | Powered By AI
                </Link>{" "}
                (32 hs course)
              </li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐤</span>
        </div>
      </div>
    </>
  );
};

export default Home;
