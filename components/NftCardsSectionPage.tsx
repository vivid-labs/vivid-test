import { NftCardsSection } from "./NftCardsSection";
export const NftCardsSectionPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <NftCardsSection
      screen="Desktop"
      override={{
        width: "100%",
      }}
    />
  );
};
