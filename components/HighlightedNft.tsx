import styles from "./HighlightedNft.module.css";
import vivid_8ac9e0e3bcf2d5507a81254146143702cd71f923 from "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png";
import { ArtistCard } from "./ArtistCard";

export const HighlightedNft = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.highlightedNft0}>
      <img
        src={vivid_8ac9e0e3bcf2d5507a81254146143702cd71f923.src}
        className={styles.highlightedNft1}
      />
      <div className={styles.highlightedNft2}>
        <p className={styles.highlightedNft3}>Space Walking</p>
        <ArtistCard
          property_1="Horizontal Small"
          artistName="Animakid"
          additionalInfo={true}
          totalSales="Total Sales:"
          salesNumber="34.53 ETH"
          rankingNumber2={true}
          rankingNumber="1"
          style={{
            height: "fit-content",
            gap: "12px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
