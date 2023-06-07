import styles from "./SwitzerlandLanding.module.css";
import { HeroSection } from "./HeroSection";
import { TopPrograms } from "./TopPrograms";
import { Footer } from "./Footer";

export const SwitzerlandLanding = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.switzerlandLanding}>
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
