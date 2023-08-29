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
          <div className="max-w-lg">
            <p className="text-xl ">
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
              <br />
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=zuJ-elbo88E&list=PLJz1HruEnenAf80uOfDwBPqaliJkjKg69"
                  className="underline"
                >
                  Web2 to Web3 playlist by BuidlGuidl
                </Link>{" "}
                (from theory to completing SpeedRunEthereum challenges and entering BuidlGuidl)
              </li>
              <li>
                <Link href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" className="underline">
                  Scaffold-ETH - general developer chat
                </Link>{" "}
                (Telegram)
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
              <li>- create frontends that can react to smart contracts</li>
              <li>- make your frontend interact with smart contracts</li>
              <li>- make your frontend look nice </li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐥</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 p-4">
        <h2 className="text-3xl">Use AI as a pair programmer and learning buddy</h2>
        <div className="flex flex-row items-center gap-3">
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">Reccomended:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://chat.openai.com/" className="underline">
                  ChatGPT
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://www.phind.com/" className="underline">
                  Phind
                </Link>{" "}
                (AI search engine for developers)
              </li>

              <li>
                -{" "}
                <Link href="https://github.com/features/copilot" className="underline">
                  GitHub Copilot
                </Link>{" "}
                (great for help with code within VS code, 10$/mo - unless you&apos;re a univ student)
              </li>
            </ul>
            <p className="text-xl max-w-lg">Suggested:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=jHv63Uvk5VA" className="underline">
                  Complete ChatGPT Tutorial - [Become A Power User in 30 Minutes]
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=iR99LO28nzM" className="underline">
                  Uploading Files to ChatGPT: A More Powerful Experience
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=RkK6CgOTLqA" className="underline">
                  5 Ways To Use ChatGPT To Build Your Website
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=GizsSo-EevA" className="underline">
                  Use ChatGPT to Code a Full Stack App – Full Course
                </Link>{" "}
              </li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🤖</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 p-4">
        <h2 className="text-3xl">Let&apos;s learn about smart contracts then...</h2>
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
                -{" "}
                <Link href="https://university.alchemy.com/home" className="underline">
                  Alchemy University
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://github.com/x676f64/secureum-mind_map" className="underline">
                  Secureum Mind Map
                </Link>{" "}
              </li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐤</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 p-4">
        <h2 className="text-3xl">Learn modern frontend dynamics...</h2>
        <div className="flex flex-row items-center gap-3">
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">Learn some React and Next.js:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=gyMwXuJrbJQ" className="underline">
                  Learn React JS - Full Course for Beginners [2019]
                </Link>{" "}
                (5 hs course)
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=KjY94sAKLlw" className="underline">
                  Next.js React Framework Course – Build and Deploy a Full Stack App From scratch
                </Link>{" "}
                (5 hs course)
              </li>
            </ul>
            <p className="text-xl max-w-lg">Other options:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=FJDVKeh7RJI&t" className="underline">
                  React & TypeScript - Course for Beginners
                </Link>{" "}
                (1:30 hs course)
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=bMknfKXIFA8" className="underline">
                  React Course - Beginner&apos;s Tutorial for React JavaScript Library [2022]
                </Link>{" "}
                (12 hs course)
              </li>
              <li>
                -{" "}
                <Link href="https://react.dev/" className="underline">
                  Official React learning site
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://nextjs.org/learn/foundations/about-nextjs" className="underline">
                  Official Next.js learning site
                </Link>{" "}
              </li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐔</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 p-4">
        <h2 className="text-3xl">Make your frontend interact with smart contracts...</h2>
        <div className="flex flex-row items-center gap-3">
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">Learn some Scaffold-ETH 2 hooks and Wagmi:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://docs.scaffoldeth.io/hooks/" className="underline">
                  Interacting with your Smart Contracts - Scaffold-ETH 2 Docs
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://wagmi.sh/core/getting-started" className="underline">
                  Wagmi - Getting started
                </Link>{" "}
              </li>
            </ul>
            <p className="text-xl max-w-lg">Other options:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://viem.sh/docs/getting-started.html" className="underline">
                  Viem - Getting Started
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://viem.sh/docs/getting-started.html" className="underline">
                  RainbowKit - Introduction
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://docs.ethers.org/v6/" className="underline">
                  Ethers - Documentation
                </Link>{" "}
              </li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🦃</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 p-4 ">
        <h2 className="text-3xl">Learn frontend styling frameworks...</h2>
        <div className="flex flex-row items-center gap-3 ">
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">Learn some TailwindCSS and daisyUI:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=ft30zcMlFao" className="underline">
                  Learn Tailwind CSS – Course for Beginners
                </Link>{" "}
                (4 hs course)
              </li>
              <li>
                -{" "}
                <Link href="https://tailwindcss.com/" className="underline">
                  TailwindCSS Official Docs
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://daisyui.com/" className="underline">
                  daisyUI Official Docs (TailwindCSS components)
                </Link>{" "}
              </li>
            </ul>
            <p className="text-xl max-w-lg">Other options:</p>
            <ul>
              <li>
                -{" "}
                <Link
                  href="https://www.youtube.com/playlist?list=PLx2Y9Sna27Xt3deeeOLqW59-mdWpUWQ0T"
                  className="underline"
                >
                  ChakraUI for Beginners
                </Link>{" "}
                (1 hs course)
              </li>
              <li>
                -{" "}
                <Link href="https://chakra-ui.com/getting-started" className="underline">
                  ChakraUI Official Docs
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://chakra-templates.dev/" className="underline">
                  ChakraUI Templates
                </Link>{" "}
              </li>
            </ul>
          </div>
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🦚</span>
        </div>
      </div>
    </>
  );
};

export default Home;
