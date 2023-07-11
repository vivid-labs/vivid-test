import { ArtistCard } from "./ArtistCard";
export const ArtistCardPage = ({ override }: { override?: any }) => {
  return (
    <ArtistCard
      property_1="Default"
      artistName="Dish Studio"
      additionalInfo={true}
      totalSales="Total Sales:"
      salesNumber="34.53 ETH"
      rankingNumber2={true}
      rankingNumber="1"
      override={{
        width: "100%",
      }}
    />
  );
};
