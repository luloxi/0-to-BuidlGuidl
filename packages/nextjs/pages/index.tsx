import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="hero mt-6 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <figure>
            <Image
              alt="Have experience? No, sir. I hope you will gain some here. You're hired."
              src="/experience.jpg"
              width={500}
              height={500}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <figcaption className="text-center">No copyright infringment intended.</figcaption>
          </figure>
          <div>
            <h1 className="text-6xl">Earn a monthly ETH stream building public goods!</h1>
            <p className="mt-6 text-lg">
              <strong className="text-red-500">New bulding web3?</strong> This compilation of{" "}
              <strong>free learning resources</strong> will help you get started.
              <p />
              <strong className="text-yellow-500">Got some web3 skills?</strong> Go to{" "}
              <Link className="underline" href="https://speedrunethereum.com/">
                SpeedRunEthereum
              </Link>{" "}
              and{" "}
              <strong>
                complete the challenges to join{" "}
                <Link className="underline" href="https://buidlguidl.com/">
                  BuidlGuidl
                </Link>
              </strong>
              .
              <p />
              <strong className="text-green-500">After you join, build dApps</strong> for the Ethereum blockchain with{" "}
              <Link className="underline" href="https://scaffoldeth.io/">
                Scaffold-ETH 2
              </Link>
              , an open source toolkit.
            </p>
            <p className="text-center text-2xl">
              <strong>
                Share your builds with{" "}
                <Link className="underline" href="https://buidlguidl.com/">
                  BuidlGuidl
                </Link>{" "}
                and the world, and earn some ETH!
              </strong>
            </p>

            <div className="flex justify-around mt-6">
              <button className="btn btn-error">Free Learning Resources</button>
              <Link className="underline" href="https://speedrunethereum.com/">
                <button className="btn btn-warning">SpeedRunEthereum</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
