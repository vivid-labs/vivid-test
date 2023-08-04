import { HeroSection } from "./HeroSection";
import heroSection from "./heroSection.png";
import { TopPrograms } from "./TopPrograms";
import { Footer } from "./Footer";
export const SwitzerlandLanding = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="flex w-full flex-shrink-0 flex-col items-center gap-12 overflow-hidden bg-[rgb(13,_14,_16)] font-[Quicksand]"
      style={override}
    >
      <HeroSection
        override={{
          position: "relative",
        }}
      />
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
