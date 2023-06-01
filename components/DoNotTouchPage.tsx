import styles from "./DoNotTouchPage.module.css";
import { HeroSection } from "./HeroSection";
import { TrendingCollection } from "./TrendingCollection";
import { TopRatedArtists } from "./TopRatedArtists";
import { Navigation } from "./Navigation";

export const DoNotTouchPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.doNotTouchPage}>
      <HeroSection
        screen="Dekstop"
        style={{
          height: "fit-content",
          width: "fit-content",
        }}
      />
      <TrendingCollection screen="Desktop" />
      <TopRatedArtists screen="Desktop" />
      <Navigation property_1="Navigation/Desktop" />
    </div>
  );
};
