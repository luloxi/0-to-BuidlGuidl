import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center p-4 bg-primary ">
        <h1 className="text-6xl text-center">Learn the ETH tech stack!</h1>
        <p className="text-xl max-w-lg">
          To be able to create your own projects and qualify for an ETH stream, here are some resources to get you
          started:
        </p>
        <div className="flex flex-row items-center gap-6">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐣</span>
          <div className="max-w-lg ">
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
              <br />
              <li>
                <Link href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" className="underline">
                  Scaffold-ETH - general developer chat
                </Link>{" "}
                (Telegram)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 ">
        <h2 className="text-3xl text-center">
          Got the basics, <strong>now what?</strong>
        </h2>
        <div className="flex flex-row items-center gap-3">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐥</span>

          <div>
            <p className="text-xl max-w-lg">
              To create production ready dApps from scratch using{" "}
              <Link className="underline" href="https://scaffoldeth.io/">
                Scaffold-ETH 2
              </Link>
              , you need to:
            </p>
            <ul>
              <li>- know how to read, edit and write smart contracts</li>
              <li>- create frontends that can react to smart contracts</li>
              <li>- make frontends interact with smart contracts</li>
              <li>- make frontends look and work good</li>
              <li>- use all that knowledge in a single build! </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-secondary">
        <h2 className="text-3xl text-center">Use AI as a pair programmer and learning buddy</h2>
        <div className="flex flex-row items-center gap-3">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🤖</span>
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
                (great for help with code within VS code, 10$/mo - unless you&apos;re a university student)
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
              <li>
                -{" "}
                <Link href="https://bard.google.com/" className="underline">
                  Bard
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-primary">
        <h2 className="text-3xl text-center">Learn Solidity (smart contracts)...</h2>
        <div className="flex flex-row items-center gap-3">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐤</span>
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
            <p className="text-xl max-w-lg">Other resources:</p>
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
        </div>
      </div>
      <div className="flex flex-col items-center p-4 ">
        <h2 className="text-3xl">Learn modern frontend development...</h2>
        <div className="flex flex-row items-center gap-3">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🐔</span>
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">Learn React, Next.js and TypeScript:</p>
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
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=FJDVKeh7RJI&t" className="underline">
                  React & TypeScript - Course for Beginners
                </Link>{" "}
                (1:30 hs course)
              </li>
            </ul>
            <p className="text-xl max-w-lg">Other resources:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://react.dev/" className="underline">
                  Official React learning site
                </Link>{" "}
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
                <Link href="https://nextjs.org/learn/foundations/about-nextjs" className="underline">
                  Official Next.js learning site
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=gp5H0Vw39yw" className="underline">
                  Learn TypeScript - Full Course for Beginners
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=30LWjhZzg50" className="underline">
                  Learn TypeScript – Full Tutorial
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-secondary">
        <h2 className="text-3xl">Make your frontend interact with smart contracts...</h2>
        <div className="flex flex-row items-center gap-3">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🦃</span>
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
            <p className="text-xl max-w-lg">More tools:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://docs.ethers.org/v6/" className="underline">
                  Ethers - Documentation
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
                <Link href="https://viem.sh/docs/getting-started.html" className="underline">
                  Viem - Getting Started
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-primary">
        <h2 className="text-3xl">Learn frontend styling frameworks...</h2>
        <div className="flex flex-row items-center gap-3 ">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🦚</span>
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
            <p className="text-xl max-w-lg">Alternative:</p>
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
        </div>
      </div>
      <div className="flex flex-col items-center p-4 ">
        <h2 className="text-3xl">Get started creating dApps!</h2>
        <div className="flex flex-row items-center gap-3 ">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🏗️</span>
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">See Scaffold-ETH 2 in action:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=_1qqjozKPWQ" className="underline">
                  Live building an app on Ethereum
                </Link>{" "}
                (1 hour video)
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=ahDEbcdVV-o" className="underline">
                  npx create-eth session building a live app on Ethereum
                </Link>{" "}
                (45 min video)
              </li>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=Gspa3YL6Rqk" className="underline">
                  Introduction to Full Stack dApp Development (with The Graph)
                </Link>{" "}
                (1:30 hs video)
              </li>
            </ul>
            <p className="text-xl max-w-lg">More resources:</p>
            <ul>
              <li>
                -{" "}
                <Link
                  href="https://mirror.xyz/news.buidlguidl.eth/8Lx4pV-h2yk6mu5C5UZVPjfOtVwknLmB8bd7114kaxI"
                  className="underline"
                >
                  Solidity Tinkering w/Scaffold-ETH
                </Link>{" "}
              </li>

              <li>
                -{" "}
                <Link href="https://youtu.be/vZpv9qHMSRY?si=tNeQoUGiTowuYH8Q" className="underline">
                  Scaffold-ETH-2: building decentralized applications
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link
                  href="https://www.youtube.com/playlist?list=PLJz1HruEnenD77QAsqnk7KG8rSOMk0B99"
                  className="underline"
                >
                  BuidlGuidl Labs
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-secondary">
        <h2 className="text-3xl">Let’s get you that 0.5 ETH stream now!</h2>
        <div className="flex flex-row items-center gap-3 ">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🏰</span>
          <div className="max-w-lg">
            <p className="text-xl ">
              To get rewarded, you must be <strong>meaningfully contributing to the ecosystem</strong> in some ways:
            </p>
            <ul>
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
            <p className="text-xl ">Learn more about streams:</p>
            <ul>
              <li>
                -{" "}
                <Link
                  className="underline"
                  href="https://mirror.xyz/news.buidlguidl.eth/O_Gc84QO4TjvxJnunkRr-s-It1qBTK7TMlJcWf4FQ_I"
                >
                  BuidlGuidl FAQ
                </Link>
              </li>
              <li>
                -{" "}
                <Link className="underline" href="https://www.youtube.com/watch?v=9-Xg7tojUbk">
                  BG Labs - BG Streams, Onboarding, and Psychology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-primary">
        <h2 className="text-3xl">Don&apos;t know what to build?</h2>
        <div className="flex flex-row items-center gap-3 ">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">💡</span>
          <div className="max-w-lg">
            <p className="text-xl ">You can get some ideas from here:</p>
            <ul>
              <li>
                -{" "}
                <Link className="underline" href="https://www.youtube.com/watch?v=9-Xg7tojUbk">
                  ETH Tech tree
                </Link>
              </li>
              <li>
                -{" "}
                <Link className="underline" href="https://www.youtube.com/watch?v=9-Xg7tojUbk">
                  ETH.BUILD - Educational Sandbox for Web3
                </Link>
              </li>
              <li>
                -{" "}
                <Link className="underline" href="https://www.youtube.com/watch?v=9-Xg7tojUbk">
                  ETH.BUILD - YouTube Channel
                </Link>
              </li>
              <li>
                -{" "}
                <Link
                  className="underline"
                  href="https://twitter.com/austingriffith/status/1478760479275175940?s=20&t=0zGF8M_7Hoeuy-D6LDoFpA"
                >
                  Austin Griffith&apos;s thread on what to do after crushing SpeedRunEthereum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 ">
        <h2 className="text-3xl">More resources!</h2>
        <div className="flex flex-row items-center gap-3 ">
          <span className="inline-block h-6 align-middle ml-2 text-7xl">🍰</span>
          <div className="max-w-lg">
            <p className="text-xl max-w-lg">Learn about why all this is important and useful:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://thenetworkstate.com/" className="underline">
                  The Network State
                </Link>{" "}
                (book on online culture, community, politics, economy, etc…)
              </li>
            </ul>
            <p className="text-xl max-w-lg">Learn more about Solidity:</p>
            <ul>
              <li>
                -{" "}
                <Link
                  href="https://lulox.notion.site/Solidity-b6d7f7c5c5ec4c1fbbc01843f4055c72?pvs=4"
                  className="underline"
                >
                  List of courses and guides
                </Link>{" "}
              </li>

              <li>
                -{" "}
                <Link
                  href="https://lulox.notion.site/Auditoor-18ca4918604c41589e799a49a831e027?pvs=4"
                  className="underline"
                >
                  Resources on smart contracts security
                </Link>{" "}
              </li>
            </ul>
            <p className="text-xl max-w-lg">Use GitHub to collaborate with peers:</p>
            <ul>
              <li>
                -{" "}
                <Link
                  href="https://www.youtube.com/watch?v=RGOj5yH7evk&list=PLLJ1hZKyeCH1I8dP0UNTpWoIhsl6KpVbu&index=3"
                  className="underline"
                >
                  Git and GitHub for Beginners - Crash Course
                </Link>{" "}
                (1 hour video)
              </li>
              <li>
                -{" "}
                <Link href="https://skills.github.com/" className="underline">
                  GitHub Skills
                </Link>{" "}
                - Learn how to use GitHub with interactive courses designed for beginners and experts.
              </li>
              <li>
                -{" "}
                <Link href="https://desktop.github.com/" className="underline">
                  GitHub Desktop
                </Link>{" "}
                (
                <Link href="https://github.com/muroko/github-desktop-linux" className="underline">
                  Linux version
                </Link>
                )
              </li>
            </ul>
            <p className="text-xl max-w-lg">Learn Docker and GraphQL:</p>
            <ul>
              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=ed8SzALpx1Q" className="underline">
                  GraphQL Full Course - Novice to Expert
                </Link>{" "}
              </li>

              <li>
                -{" "}
                <Link href="https://www.youtube.com/watch?v=fqMOX6JJhGo" className="underline">
                  Docker Tutorial for Beginners - A Full DevOps Course on How to Run Applications in Containers
                </Link>{" "}
              </li>
              <li>
                -{" "}
                <Link href="https://learnweb3.io/lessons/docker-essentials/" className="underline">
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
