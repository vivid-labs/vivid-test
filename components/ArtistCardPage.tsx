import { ArtistCard } from "./ArtistCard";
export const ArtistCardPage = ({ override }: { override?: any }) => {
  return (
    <ArtistCard
      property_1="Horizontal Medium"
      artistName="Orbitian"
      additionalInfo={true}
      totalSales="Total Sales:"
      salesNumber="34.53 ETH"
      rankingNumber2={true}
      rankingNumber="1"
      override={{
        height: "fit-content",
        width: "605px",
      }}
      override={{
        width: "100%",
      }}
    />
  );
};
