import { HeroSection } from "./HeroSection";
import { TopPrograms } from "./TopPrograms";
import { Footer } from "./Footer";
export const SwitzerlandLanding = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        height: "fit-content",
        position: "relative",
        width: "100%",
        flexShrink: 0,
        backgroundColor: "rgb(13, 14, 16)",
        ...override,
      }}
      figma-id="4:6:879"
    >
      <HeroSection figma-id="4:6:880" />
      <TopPrograms
        override={{
          height: "fit-content",
          width: "100%",
        }}
        figma-id="4:6:881"
      />
      <Footer figma-id="4:6:882" />
    </div>
  );
};
