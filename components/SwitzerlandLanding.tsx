import styles from "./SwitzerlandLanding.module.css";
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
    <div className={styles.switzerlandLandingComponent} style={override}>
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
