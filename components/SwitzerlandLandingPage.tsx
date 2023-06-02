import styles from "./SwitzerlandLandingPage.module.css";
import { HeroSection } from "./HeroSection";
import { TopPrograms } from "./TopPrograms";
import { Footer } from "./Footer";

export const SwitzerlandLandingPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.switzerlandLandingPage}>
      <HeroSection />
      <TopPrograms
        style={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <Footer />
    </div>
  );
};
