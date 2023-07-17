import { HeroSection } from "./HeroSection";
import { TopPrograms } from "./TopPrograms";
import { Footer } from "./Footer";
export const SwitzerlandLanding = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col items-center gap-12 relative w-full flex-shrink-0 bg-[rgb(13,_14,_16)]"
      figma-id="1201:1529"
    >
      <HeroSection />
      <TopPrograms
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <Footer />
    </div>
  );
};
