import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";
import Pagination from "./Pagination";
import { Buffer } from "buffer";
import { useContractReads } from "wagmi";
import { useDeployedContractInfo, useScaffoldContractRead } from "~~/hooks/scaffold-eth";

interface NFTContainerProps {
  connectedAddress: any;
}

const NFTContainer: React.FC<NFTContainerProps> = ({ connectedAddress }) => {
  const [showAllNFTs, setShowAllNFTs] = useState<boolean>(false);
  const [parsedMoodNftInfoData, setParsedMoodNftInfoData] = useState<any[] | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(12);
  const [ownerData, setOwnerData] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [selectedPage, setSelectedPage] = useState<number>(currentPage);

  const itemsPerPage = displayCount;
  const totalPages = Math.ceil((parsedMoodNftInfoData?.length ?? 0) / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const { data: contractData } = useDeployedContractInfo("MoodNft");

  const MoodNftContract = {
    address: contractData?.address,
    abi: contractData?.abi,
  };

  const MoodNftInfoRead = [];
  const MoodNftOwnerRead = [];

  const filteredMoodNftInfoData = parsedMoodNftInfoData?.filter(data => showAllNFTs || data.owner === connectedAddress);

  const displayedMoodNftInfoData = filteredMoodNftInfoData?.slice(startIndex, endIndex);

  const { data: totalSupply } = useScaffoldContractRead({
    contractName: "MoodNft",
    functionName: "totalSupply",
  });

  if (totalSupply) {
    for (let tokenId = 0; tokenId < totalSupply; tokenId++) {
      MoodNftInfoRead.push({
        ...MoodNftContract,
        args: [tokenId],
        functionName: "tokenURI",
      });
      MoodNftOwnerRead.push({
        ...MoodNftContract,
        args: [tokenId],
        functionName: "ownerOf",
      });
    }
  }

  const { data: MoodNftInfoData } = useContractReads({
    contracts: MoodNftInfoRead,
    watch: true,
  });

  const { data: MoodNftOwnerData } = useContractReads({
    contracts: MoodNftOwnerRead,
    watch: true,
  });

  useEffect(() => {
    if (MoodNftOwnerData) {
      const updatedOwnerData = MoodNftOwnerData.map(contractData => {
        return contractData.result as string; // Get owner data
      });

      setOwnerData(updatedOwnerData);
    }
  }, [MoodNftOwnerData]);

  useEffect(() => {
    if (MoodNftInfoData) {
      const updatedData = MoodNftInfoData.map((contractData, index) => {
        const base64Data = (contractData.result as string).split(",")[1]; // Extract base64 part
        const decodedData = Buffer.from(base64Data, "base64").toString(); // Decode base64 to string
        return {
          ...JSON.parse(decodedData), // Parse JSON string
          owner: ownerData[index], // Add owner data
          tokenId: index, // Use the index as the tokenId
        };
      });

      setParsedMoodNftInfoData(updatedData);
    }
  }, [MoodNftInfoData, ownerData]);

  const handleDisplayCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayCount(parseInt(event.target.value, 10));
  };

  const handleToggleChange = () => {
    setShowAllNFTs(prevState => !prevState);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // const handlePageSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedPage(parseInt(event.target.value, 10)); // Update the selected page
  // };

  // const handleGoButtonClick = () => {
  //   if (selectedPage >= 1 && selectedPage <= totalPages) {
  //     setCurrentPage(selectedPage); // Update the current page based on the selected page
  //   }
  // };

  return (
    <div className="flex flex-col gap-4 my-8 px-5 justify-center">
      <div>
        <label htmlFor="displayCount">Max NFTs to display: </label>
        <select
          id="displayCount"
          className="px-2 py-1 border rounded bg-slate-600 text-white"
          value={displayCount}
          onChange={handleDisplayCountChange}
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={36}>36</option>
          <option value={48}>48</option>
          <option value={60}>60</option>
        </select>{" "}
        <div>
          {/* Toggle button */}
          <label htmlFor="showOnlyYourNFTs">Show only your NFTs: </label>
          <input
            type="checkbox"
            id="showOnlyYourNFTs"
            checked={!showAllNFTs} // Invert the checked state
            onChange={handleToggleChange} // No need to change the handler
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {MoodNftOwnerData &&
          displayedMoodNftInfoData?.map((data, index) => (
            <NFTCard
              key={index} // Use the tokenId from the fetched data
              data={data}
              tokenId={data.tokenId} // Use the tokenId from the fetched data
              owner={data.owner}
              connectedAddress={connectedAddress}
            />
          ))}
      </div>

      <div className="flex justify-center mt-4">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default NFTContainer;
