import { HeroSection } from "./HeroSection";

export const HeroSectionPage = ({ style }: { style?: any }) => {
  return (
    <HeroSection
      screen="Dekstop"
      style={{
        height: "fit-content",
        width: "fit-content",
      }}
    />
  );
};
