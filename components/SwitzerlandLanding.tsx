import "./SwitzerlandLanding.css";
import { HeroSection } from "./HeroSection";
import { TopPrograms } from "./TopPrograms";
import { Footer } from "./Footer";

export const SwitzerlandLanding = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-start items-center gap-[48px] relative w-[1440px] flex-shrink-0 bg-[rgb(13,_14,_16)]"
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
