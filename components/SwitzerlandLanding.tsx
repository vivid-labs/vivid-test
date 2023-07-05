import styles from "./SwitzerlandLanding.module.css";
import { HeroSection } from "./HeroSection";
import { TopPrograms } from "./TopPrograms";
import { Footer } from "./Footer";
export const SwitzerlandLanding = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.switzerlandLanding}>
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
