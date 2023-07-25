import { CollectionCard } from "./CollectionCard";
export const CollectionCardPage = ({ override }: { override?: any }) => {
  return (
    <CollectionCard
      property_1="Desktop Card"
      collectionName="Happy Robots"
      additionalNfTsNumber="1025+"
      override={{
        width: "100%",
      }}
      figma-id="7:1342:12751"
    />
  );
};
