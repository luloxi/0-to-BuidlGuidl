import React, { useState } from "react";
import Image from "next/image";
import { Attribute } from "./types";
// import { useAccount } from "wagmi";
import { Address, AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

// const { address } = useAccount();

interface NFTCardProps {
  data: {
    image: string;
    name: string;
    description: string;
    attributes: Attribute[];
  };
  tokenId: number;
  owner?: string;
  connectedAddress?: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ data, tokenId, owner, connectedAddress }) => {
  const [activeTab, setActiveTab] = useState("artwork");
  // Handle flipping mood

  const { writeAsync: flipMood } = useScaffoldContractWrite({
    contractName: "MoodNft",
    functionName: "flipMood",
    args: [BigInt(0)],
  });

  const handleFlipMood = async (tokenId: number) => {
    await flipMood({ args: [BigInt(tokenId)] });
  };

  // Transfer NFT

  const [transferAddresses, setTransferAddresses] = useState<{ [tokenId: number]: string }>({});

  const { writeAsync: transfer } = useScaffoldContractWrite({
    contractName: "MoodNft",
    functionName: "transfer",
    args: ["0x0", BigInt(0)],
  });

  const handleTransfer = async (to: string, tokenId: number) => {
    await transfer({ args: [to, BigInt(tokenId)] });
  };

  return (
    <div
      className="card card-compact bg-base-100 shadow-lg sm:min-w-[300px] sm:max-w-[300px] shadow-secondary"
      key={tokenId}
    >
      <div className="tabs flex justify-center gap-3">
        <a
          className={`tab tab-bordered ${activeTab === "artwork" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("artwork")}
        >
          Artwork
        </a>
        <a
          className={`tab tab-bordered ${activeTab === "info" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("info")}
        >
          Info
        </a>
        {connectedAddress == owner && (
          <a
            className={`tab tab-bordered ${activeTab === "actions" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("actions")}
          >
            Actions
          </a>
        )}
      </div>

      {activeTab === "artwork" && (
        // Render Artwork content here
        <figure className="relative">
          <Image src={data.image} alt="NFT Image" className="h-48 min-w-full" width={100} height={100} />
          <figcaption className="glass absolute bottom-4 left-4 p-4 w-25 rounded-xl">
            <span># {tokenId}</span>
          </figcaption>
        </figure>
      )}

      {activeTab === "info" && (
        // Render Info content here
        <div className="card-body space-y-3">
          {" "}
          <div className="flex items-center justify-center">
            <p className="text-xl p-0 m-0 font-semibold">
              {data.name} #{tokenId}
            </p>
            <div className="flex flex-wrap space-x-2 mt-1">
              {data.attributes.map((attribute: Attribute, index: number) => (
                <span key={index} className="badge py-3">
                  <span className="font-bold">{attribute.trait_type}</span>: {attribute.value}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="my-0 text-lg whitespace-normal">{data.description}</p>
          </div>
          <div className="flex space-x-3 mt-1 items-center">
            <span className="text-lg font-semibold">Owner : </span>
            <Address address={owner} />
          </div>
        </div>
      )}

      {activeTab === "actions" && (
        // Render Actions content here
        <>
          <div className="card-body space-y-3">
            <div className="flex flex-col my-2 space-y-1">
              <span className="text-lg font-semibold mb-1">
                Send {data.name} #{tokenId} To:{" "}
              </span>
              <AddressInput
                placeholder="Address here (0x... or ENS)"
                value={transferAddresses[tokenId] || ""}
                onChange={(newValue: string) =>
                  setTransferAddresses(prevState => ({ ...prevState, [tokenId]: newValue }))
                }
              />
            </div>
          </div>

          <div className="card-actions mb-2 justify-around">
            <button className="btn btn-warning btn-md px-8 m-2 tracking-wide" onClick={() => handleFlipMood(tokenId)}>
              Flip Mood
            </button>
            <button
              className="btn btn-primary btn-md px-8 m-2 tracking-wide"
              onClick={() => handleTransfer(transferAddresses[tokenId], tokenId)}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NFTCard;
