import { NftCard } from "./NftCard";

export const NftCardPage = () => {
  return (
    <NftCard
      property_1="Default"
      nftName="NFT Name"
      artistAvatarName={true}
      artistName="NFT Artist"
      additionalInfo={true}
      priceNumber="1.63 ETH"
      bidNumber="0.33 wETH"
    />
  );
};
