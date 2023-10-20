import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader title="Learn | 0 to BuidlGuidl" />

      {/* Header text */}
      <div className="flex flex-col items-center p-4">
        <h1 className="text-5xl text-center font-mono">Learn the ETH tech stack!</h1>
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          <div>
            <p className="text-xl max-w-lg font-mono">
              To be able to create your own projects and qualify for an ETH stream, here are some resources to get you
              started
            </p>
            <div className="bg-green-600 text-white text-center rounded-md">
              Sections highlighted in green are the MOST IMPORTANT ones
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="flex flex-col items-center px-4 pb-4 bg-primary">
        <div className="pt-3 font-mono">
          If you&apos;re new to web development, get familiar with the basics. Same if you&apos;re new to web3.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🐣</span>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/2">
            <div className="bg-green-600 text-white pl-6 pr-2 pb-2 rounded-md">
              <p className="text-xl max-w-lg font-mono">Learn web development and JavaScript:</p>
              <ul className="list-disc">
                <li>
                  <Link
                    href="https://www.theodinproject.com/paths/foundations/courses/foundations"
                    target="_blank"
                    className="underline"
                  >
                    Foundations Course - The Odin Project
                  </Link>
                </li>
                <li>
                  <Link href="https://university.alchemy.com/overview/js" target="_blank" className="underline">
                    Learn JavaScript - Alchemy University
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-green-600 text-white pl-6 pb-2 rounded-md">
              <p className="text-xl max-w-lg font-mono">Ethereum and web3:</p>
              <ul className="list-disc">
                <li>
                  <Link href="https://ethereum.org/en/web3/" target="_blank" className="underline">
                    What is web3 and why is it important?
                  </Link>
                </li>
                <li>
                  <Link href="https://ethereum.foundation/ethereum" target="_blank" className="underline">
                    What is Ethereum?
                  </Link>
                </li>
                <li>
                  <Link href="https://ethereum.foundation/infinitegarden" target="_blank" className="underline">
                    The Infinite Garden
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AI */}
      <div className="flex flex-col items-center p-4 bg-secondary">
        <h2 className="text-4xl text-center font-mono">Use AI as a pair programmer and learning buddy</h2>
        <div className="font-mono">
          Use AI to boost your productivity and learning speed. AI is not here to replace you, but to help you.
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 min-w-full">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className=" text-5xl pt-4">🐥 + 🤖</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2 bg-green-600 text-white pl-6 pb-4 rounded-md">
            <p className="text-xl max-w-lg font-mono">Reccomended:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://chat.openai.com/" target="_blank" className="underline">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="https://www.phind.com/" target="_blank" className="underline">
                  Phind
                </Link>{" "}
                (AI search engine for developers)
              </li>

              <li>
                <Link href="https://github.com/features/copilot" target="_blank" className="underline">
                  GitHub Copilot
                </Link>{" "}
                (great for help with code within VS code, 10$/mo - unless you&apos;re a university student)
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3">
            <p className="text-xl max-w-lg font-mono">More resources:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://www.youtube.com/watch?v=jHv63Uvk5VA" target="_blank" className="underline">
                  Complete ChatGPT Tutorial - [Become A Power User in 30 Minutes]
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=iR99LO28nzM" target="_blank" className="underline">
                  Uploading Files to ChatGPT: A More Powerful Experience
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=RkK6CgOTLqA" target="_blank" className="underline">
                  5 Ways To Use ChatGPT To Build Your Website
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=GizsSo-EevA" target="_blank" className="underline">
                  Use ChatGPT to Code a Full Stack App – Full Course
                </Link>
              </li>
              <li>
                <Link href="https://bard.google.com/" target="_blank" className="underline">
                  Bard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="flex flex-col items-center p-4 text-warning bg-slate-900 ">
        <h2 className="text-4xl text-center font-mono">
          Got the basics, <strong>now what?</strong>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/3 flex justify-center">
            <span className="text-8xl pt-4">🐥</span>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-2/3">
            <p className="text-xl max-w-lg font-mono">
              To create production ready dApps from scratch using{" "}
              <Link className="underline" target="_blank" href="https://scaffoldeth.io/">
                Scaffold-ETH 2
              </Link>
              , you need to:
            </p>
            <ul className="list-disc">
              <li>create frontends that can react to smart contracts</li>
              <li>know how to read, edit and write smart contracts</li>
              <li>make frontends interact with smart contracts</li>
              <li>use all that knowledge in a single build! </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frontend */}
      <div className="flex flex-col items-center p-4 bg-secondary">
        <h2 className="text-4xl text-center font-mono">Learn modern frontend development...</h2>
        <div className="font-mono">
          Already got the basics of HTML, CSS and JavaScript? Great! Now learn React, Next.js and TypeScript.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🐤</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2 bg-green-600 text-white pl-6 pb-6 rounded-md">
            <p className="text-xl font-mono">Learn React, Next.js and TypeScript:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://www.youtube.com/watch?v=MsnQ5uepIaE" target="_blank" className="underline">
                  Frontend Web Development: In-Depth Project Tutorial (HTML, CSS, JavaScript, TypeScript, React)
                </Link>{" "}
                (10 hs course)
              </li>

              <li>
                <Link href="https://www.youtube.com/watch?v=KjY94sAKLlw" target="_blank" className="underline">
                  Next.js React Framework Course – Build and Deploy a Full Stack App From scratch
                </Link>{" "}
                (5 hs course)
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3">
            <p className="text-xl font-mono">More resources:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://react.dev/" target="_blank" className="underline">
                  Official React learning site
                </Link>{" "}
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=bMknfKXIFA8" target="_blank" className="underline">
                  React Course - Beginner&apos;s Tutorial for React JavaScript Library [2022]
                </Link>{" "}
                (12 hs course)
              </li>
              <li>
                <Link href="https://nextjs.org/learn/foundations/about-nextjs" target="_blank" className="underline">
                  Official Next.js learning site
                </Link>{" "}
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=gp5H0Vw39yw" target="_blank" className="underline">
                  Learn TypeScript - Full Course for Beginners
                </Link>{" "}
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=30LWjhZzg50" target="_blank" className="underline">
                  Learn TypeScript – Full Tutorial
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Solidity */}
      <div className="flex flex-col items-center p-4 bg-primary">
        <h2 className="text-4xl text-center font-mono">Learn Solidity (smart contracts)...</h2>
        <div className="font-mono md:pb-4">
          Web3 wouldn&apos;t be web3 without smart contracts. Learn Solidity to be able to create your own smart
          contracts.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 min-w-full">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🐔</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2">
            <div className="bg-green-600 text-white pl-6 pt-1 pb-4 rounded-md">
              <p className="text-xl max-w-lg font-mono">BuidlGuidl learning material:</p>
              <ul className="list-disc">
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=zuJ-elbo88E&list=PLJz1HruEnenAf80uOfDwBPqaliJkjKg69"
                    className="underline font-bold"
                    target="_blank"
                  >
                    Web2 to Web3 YouTube playlist
                  </Link>{" "}
                  (learn web3 concepts and <strong>complete SpeedRunEthereum challenges</strong>)
                </li>

                <li>
                  <Link href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" target="_blank" className="underline">
                    Scaffold-ETH - general developer chat
                  </Link>{" "}
                  (Telegram)
                </li>
              </ul>
            </div>
            <p className="text-xl max-w-lg font-mono">Suggested courses:</p>
            <ul className="list-disc">
              <li>
                (Foundry){" "}
                <Link
                  href="https://www.youtube.com/watch?v=umepbfKp5rI&list=PL4Rj_WH6yLgWe7TxankiqkrkVKXIwOP42"
                  className="underline"
                  target="_blank"
                >
                  Learn Solidity, Blockchain Development, & Smart Contracts | Powered By AI
                </Link>{" "}
                (32 hs course)
              </li>
              <li>
                (Hardhat){" "}
                <Link href="https://www.youtube.com/watch?v=gyMwXuJrbJQ" className="underline" target="_blank">
                  Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript
                </Link>{" "}
                (32 hs course)
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3">
            {" "}
            <p className="text-xl max-w-lg font-mono">More resources:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://learnweb3.io/" className="underline" target="_blank">
                  LearnWeb3DAO
                </Link>{" "}
              </li>
              <li>
                <Link href="https://solidity-by-example.org/" className="underline" target="_blank">
                  Solidity by Example
                </Link>{" "}
              </li>
              <li>
                <Link href="https://www.youtube.com/@smartcontractprogrammer" className="underline" target="_blank">
                  Smart Contract Programmer (YouTube channel)
                </Link>{" "}
              </li>
              <li>
                <Link href="https://university.alchemy.com/home" className="underline" target="_blank">
                  Alchemy University
                </Link>{" "}
              </li>
              <li>
                <Link href="https://github.com/x676f64/secureum-mind_map" className="underline" target="_blank">
                  Secureum Mind Map
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frontend hooks */}
      <div className="flex flex-col items-center p-4">
        <h2 className="text-4xl text-center font-mono">Make your frontend interact with smart contracts...</h2>
        <div className="font-mono">Learn more about how to make your frontend interact with smart contracts.</div>
        <div className="flex flex-col md:flex-row items-center gap-6 min-w-full">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🦃</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2 bg-green-600 text-white pl-6 pb-6 rounded-md">
            <p className="text-xl max-w-lg font-mono">Learn Scaffold-ETH 2 and its hooks:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://scaffoldeth.io/" className="underline" target="_blank">
                  Scaffold-ETH 2 - Getting started
                </Link>{" "}
              </li>
              <li>
                <Link href="https://docs.scaffoldeth.io/hooks/" className="underline" target="_blank">
                  Interacting with your Smart Contracts - Scaffold-ETH 2 Docs
                </Link>{" "}
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3">
            <p className="text-xl font-mono">More tools:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://wagmi.sh/core/getting-started" className="underline" target="_blank">
                  Wagmi - Getting started
                </Link>{" "}
              </li>
              <li>
                <Link href="https://viem.sh/docs/getting-started.html" className="underline" target="_blank">
                  Viem - Getting Started
                </Link>{" "}
              </li>
              <li>
                <Link href="https://docs.ethers.org/v6/" className="underline" target="_blank">
                  Ethers - Documentation
                </Link>{" "}
              </li>
              <li>
                <Link href="https://www.rainbowkit.com/docs/introduction" className="underline" target="_blank">
                  RainbowKit - Introduction
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* dApp tutorials */}
      <div className="flex flex-col items-center p-4 bg-secondary">
        <h2 className="text-4xl text-center font-mono">Get started creating dApps!</h2>
        <div className="font-mono">Learn how to create dApps with Scaffold-ETH 2 by following these tutorials.</div>
        <div className="flex flex-col md:flex-row items-center gap-6 min-w-full">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🍗</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2 bg-green-600 text-white pl-6 pb-6 rounded-md">
            <p className="text-xl font-mono">See Scaffold-ETH 2 in action:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://www.youtube.com/watch?v=trNWg8sXzcE" className="underline" target="_blank">
                  EF && BuidlGuidl | 🚢 Shipping Ethereum Apps
                </Link>{" "}
                (30 min video)
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=_1qqjozKPWQ" className="underline" target="_blank">
                  Live building an app on Ethereum
                </Link>{" "}
                (1 hour video)
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=ahDEbcdVV-o" className="underline" target="_blank">
                  npx create-eth session building a live app on Ethereum
                </Link>{" "}
                (45 min video)
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3">
            <p className="text-xl max-w-lg font-mono">More resources:</p>
            <ul className="list-disc">
              <li>
                <Link
                  href="https://www.youtube.com/playlist?list=PLJz1HruEnenD77QAsqnk7KG8rSOMk0B99"
                  className="underline"
                  target="_blank"
                >
                  BuidlGuidl Labs
                </Link>
              </li>
              <li>
                <Link
                  href="https://mirror.xyz/news.buidlguidl.eth/8Lx4pV-h2yk6mu5C5UZVPjfOtVwknLmB8bd7114kaxI"
                  className="underline"
                  target="_blank"
                >
                  Solidity Tinkering w/Scaffold-ETH
                </Link>
              </li>
              <li>
                <Link href="https://youtu.be/vZpv9qHMSRY?si=tNeQoUGiTowuYH8Q" className="underline" target="_blank">
                  Scaffold-ETH-2: building decentralized applications
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=Gspa3YL6Rqk" className="underline" target="_blank">
                  Introduction to Full Stack dApp Development (with The Graph)
                </Link>{" "}
                (1:30 hs video)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BuildGuidl intro */}
      <div className="flex flex-col items-center p-4 bg-slate-950 text-success">
        <h2 className="text-4xl text-center font-mono">Let’s get you that 0.5 ETH stream now!</h2>

        <div className="flex flex-col md:flex-row items-center gap-6" min-w-full>
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🏰</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2">
            <p className="text-xl font-mono">
              To get rewarded, you must be <strong>meaningfully contributing to the ecosystem</strong> in some ways:
            </p>
            <ul className="list-disc">
              <li>
                🖋 <strong>Contribute on Github</strong> by creating issues, creating PRs, creating your own branch with
                a ReadMe to help others learn something new, etc...
              </li>
              <li>
                📬 Stay active on the Telegram channels to <strong>assist others</strong>
              </li>
              <li>
                💡 Have an idea for a prototype?{" "}
                <strong>Create a new branch or start fresh with scaffold-ETH2 and make it happen!</strong>
              </li>
              <li>
                🎨 <strong>Create cool designs</strong>, <strong>BuidlGuidl articles</strong> or{" "}
                <strong>walk-throughs</strong>!
              </li>
              <li>
                🧹 Good at front end? There are always <strong>prototypes that need a good UI/UX</strong>!{" "}
              </li>
            </ul>

            <p className="text-xl font-mono">Learn more about streams:</p>
            <ul className="list-disc">
              <li>
                <Link
                  className="underline"
                  href="https://mirror.xyz/news.buidlguidl.eth/O_Gc84QO4TjvxJnunkRr-s-It1qBTK7TMlJcWf4FQ_I"
                  target="_blank"
                >
                  BuidlGuidl FAQ
                </Link>
              </li>
              <li>
                <Link className="underline" href="https://www.youtube.com/watch?v=9-Xg7tojUbk" target="_blank">
                  BG Labs - BG Streams, Onboarding, and Psychology
                </Link>
              </li>
              <li>
                <Link className="underline" href="https://www.youtube.com/watch?v=ivlUrYmJHw4" target="_blank">
                  Web3 Builders Ep 1- Stealing Web2&apos;s Developers With Austin Griffith
                </Link>
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3 bg-green-600 text-white pl-6 pb-6 rounded-md">
            <p className="text-xl max-w-lg font-mono">Use GitHub to collaborate with peers:</p>
            <ul className="list-disc">
              <li>
                <Link
                  href="https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md"
                  className="underline"
                  target="_blank"
                >
                  Scaffold-ETH 2 Contributing Guide
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="https://docs.github.com/en/get-started/quickstart/contributing-to-projects"
                  className="underline"
                  target="_blank"
                >
                  Github&apos;s fork and pull request workflow.
                </Link>{" "}
              </li>
              <li>
                <Link href="https://skills.github.com/" className="underline" target="_blank">
                  GitLens
                </Link>{" "}
                - Most popular Git extension for Visual Studio Code
              </li>

              <li>
                <Link href="https://skills.github.com/" className="underline" target="_blank">
                  GitHub Skills
                </Link>{" "}
                - Interactive courses designed by GitHub
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=RGOj5yH7evk&list=PLLJ1hZKyeCH1I8dP0UNTpWoIhsl6KpVbu&index=3"
                  className="underline"
                  target="_blank"
                >
                  Git and GitHub for Beginners - Crash Course
                </Link>{" "}
              </li>
              <li>
                <Link href="https://desktop.github.com/" className="underline" target="_blank">
                  GitHub Desktop
                </Link>{" "}
                (
                <Link href="https://github.com/muroko/github-desktop-linux" className="underline" target="_blank">
                  Linux version
                </Link>
                )
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Build ideas */}
      <div className="flex flex-col items-center p-4 bg-slate-900 text-warning">
        <h2 className="text-4xl text-center font-mono">Don&apos;t know what to build?</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/3 flex justify-center">
            <span className="text-8xl pt-4">💡</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          {/* <div className="md:w-1/2"></div> */}

          {/* This div will be on the right on larger screens */}
          <div className="md:w-2/3">
            <p className="text-xl font-mono">You can get some ideas from here:</p>
            <ul className="list-disc">
              <li>
                <Link
                  className="underline"
                  href="https://twitter.com/austingriffith/status/1478760479275175940?s=20&t=0zGF8M_7Hoeuy-D6LDoFpA"
                  target="_blank"
                >
                  What to do after crushing SpeedRunEthereum?
                </Link>
              </li>
              <li>
                <Link className="underline" href="https://miro.com/app/board/uXjVPbc4b68=/" target="_blank">
                  ETH Tech tree
                </Link>
              </li>
              <li>
                <Link className="underline" href="https://eth.build/" target="_blank">
                  ETH.BUILD - Educational Sandbox for Web3
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="https://www.youtube.com/playlist?list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi"
                  target="_blank"
                >
                  ETH.BUILD - YouTube Channel
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mint donation NFT */}
      <div className="flex flex-col items-center p-4 bg-slate-600 text-blue-300">
        <h2 className="text-4xl text-center font-mono">Found this site helpful?</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/3 flex justify-center">
            <span className="text-8xl pt-4">😇</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2">
            <p className="text-xl font-mono">
              Consider{" "}
              <Link href="mint" className="underline ">
                minting an NFT
              </Link>{" "}
              and making a donation!
            </p>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-2/3">
            <Link href="mint">
              <Image src="nft.svg" alt="NFT Image" className="h-64 min-w-full" width={150} height={150} />
            </Link>
          </div>
        </div>
      </div>

      {/* Styling */}
      <div className="flex flex-col items-center p-4 bg-primary">
        <h2 className="text-4xl text-center font-mono">Use modern frontend styling!</h2>
        <div className="font-mono pb-4">
          Learn how to use modern frontend styling to make your dApps look great fast!
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 min-w-full">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🦚</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2 bg-green-600 text-white pl-6 pb-6 rounded-md">
            {" "}
            <p className="text-xl font-mono">TailwindCSS and daisyUI:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://tailwindcss.com/" target="_blank" className="underline">
                  TailwindCSS Official Docs
                </Link>{" "}
              </li>
              <li>
                <Link href="https://daisyui.com/" target="_blank" className="underline">
                  daisyUI Official Docs (TailwindCSS components)
                </Link>{" "}
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=ft30zcMlFao" target="_blank" className="underline">
                  Learn Tailwind CSS – Course for Beginners
                </Link>{" "}
                (4 hs course)
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3">
            {" "}
            <p className="text-xl font-mono">Alternative:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://chakra-ui.com/getting-started" className="underline" target="_blank">
                  ChakraUI Official Docs
                </Link>{" "}
              </li>
              <li>
                <Link href="https://chakra-templates.dev/" className="underline" target="_blank">
                  ChakraUI Templates
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/playlist?list=PLx2Y9Sna27Xt3deeeOLqW59-mdWpUWQ0T"
                  className="underline"
                  target="_blank"
                >
                  ChakraUI for Beginners
                </Link>{" "}
                (1 hs course)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bonus */}
      <div className="flex flex-col items-center p-4">
        <h2 className="text-4xl font-mono">More resources!</h2>

        <div className="flex flex-col md:flex-row items-center gap-6 min-w-full">
          {/* This div will be on the left on larger screens */}
          <div className="md:w-1/6 flex justify-center">
            <span className="text-8xl pt-4">🍰</span>
          </div>

          {/* This div will be in the middle on larger screens */}
          <div className="md:w-1/2">
            <p className="text-xl font-mono">Get on the right mindset:</p>
            <ul className="list-disc">
              <li>
                <Link
                  href="https://www.freecodecamp.org/news/learning-to-code-tips/"
                  target="_blank"
                  className="underline"
                >
                  Tips for Learning to Code – How to Stay Consistent and Enjoy Yourself
                </Link>{" "}
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=B9XGUpQZY38" target="_blank" className="underline">
                  Principles For Success by Ray Dalio (In 30 Minutes)
                </Link>{" "}
              </li>
            </ul>

            <p className="text-xl font-mono">Learn about why all this is important and useful:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://www.notboring.co/p/the-great-online-game" className="underline" target="_blank">
                  The Great Online Game
                </Link>{" "}
              </li>
              <li>
                <Link href="https://thenetworkstate.com/" className="underline" target="_blank">
                  The Network State
                </Link>{" "}
                (book on online culture, community, politics, economy, etc…)
              </li>
            </ul>
          </div>

          {/* This div will be on the right on larger screens */}
          <div className="md:w-1/3">
            <p className="text-xl font-mono">Learn on the go:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://www.freecodecamp.org/learn" className="underline" target="_blank">
                  freeCodeCamp
                </Link>{" "}
                - Reccomended JavaScript Algorithms and Data Structures, and Front End Development Libraries
              </li>
            </ul>
            <p className="text-xl font-mono">Learn Docker and GraphQL:</p>
            <ul className="list-disc">
              <li>
                <Link href="https://www.youtube.com/watch?v=ed8SzALpx1Q" className="underline" target="_blank">
                  GraphQL Full Course - Novice to Expert
                </Link>{" "}
              </li>

              <li>
                <Link href="https://www.youtube.com/watch?v=fqMOX6JJhGo" className="underline" target="_blank">
                  Docker Tutorial for Beginners - A Full DevOps Course on How to Run Applications in Containers
                </Link>{" "}
              </li>
              <li>
                <Link href="https://learnweb3.io/lessons/docker-essentials/" className="underline" target="_blank">
                  Docker Essentials - LearnWeb3
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
