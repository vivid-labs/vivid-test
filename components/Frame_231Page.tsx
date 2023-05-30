import styles from "./Frame_231Page.module.css";
import { HeroSection } from "./HeroSection";
import { TrendingCollection } from "./TrendingCollection";
import { TopRatedArtists } from "./TopRatedArtists";

export const Frame_231Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.frame_231Page0}>
      <HeroSection screen="Dekstop" />
      <TrendingCollection screen="Desktop" />
      <TopRatedArtists screen="Desktop" />
    </div>
  );
};
