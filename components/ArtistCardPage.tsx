import { ArtistCard } from "./ArtistCard";
export const ArtistCardPage = ({ override }: { override?: any }) => {
  return (
    <ArtistCard
      property_1="Default"
      rankingNumber2={true}
      additionalInfo={true}
      artistName="Dish Studio"
      totalSales="Total Sales:"
      rankingNumber="1"
      salesNumber="34.53 ETH"
      override={{
        width: "100%",
      }}
    />
  );
};
