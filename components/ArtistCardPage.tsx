import { ArtistCard } from "./ArtistCard";

export const ArtistCardPage = ({ style }: { style?: any }) => {
  return (
    <ArtistCard
      property_1="Horizontal Small"
      artistName="Animakid"
      additionalInfo={true}
      totalSales="Total Sales:"
      salesNumber="34.53 ETH"
      rankingNumber2={true}
      rankingNumber="1"
    />
  );
};
