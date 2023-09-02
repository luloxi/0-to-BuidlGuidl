import type { NextPage } from "next";
import { useAccount } from "wagmi";
import NFTContainer from "~~/components/0-to-BuidlGuidl/NFTContainer";
import { MetaHeader } from "~~/components/MetaHeader";

const SeeCollection: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <MetaHeader />
      <NFTContainer connectedAddress={connectedAddress} />
    </>
  );
};

export default SeeCollection;
