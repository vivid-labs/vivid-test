import { HeroSection } from "./HeroSection";
import heroSection from "./heroSection.png";
export const HeroSectionPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <HeroSection
      override={{
        position: "relative",
        width: "100%",
      }}
    />
  );
};
