import styles from "./HighlightedNft.module.css";
import imagePlaceholder from "./imagePlaceholder.png";
import { ArtistCard } from "./ArtistCard";

export const HighlightedNft = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.highlightedNft}>
      <img src={imagePlaceholder.src} className={styles.imagePlaceholder} />
      <div className={styles.frame_230}>
        <p className={styles.spaceWalking}>Space Walking</p>
        <ArtistCard
          property_1="Horizontal Small"
          artistName="Animakid"
          additionalInfo={true}
          totalSales="Total Sales:"
          salesNumber="34.53 ETH"
          rankingNumber2={true}
          rankingNumber="1"
          override={{
            height: "fit-content",
            gap: "12px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
