import { HeroSection } from "./HeroSection";
import heroSection from "./heroSection.png";
export const HeroSectionPage = ({ override }: { override?: any }) => {
  return (
    <HeroSection
      override={{
        position: "relative",
        width: "100%",
      }}
      figma-id="5:6:880"
    />
  );
};
