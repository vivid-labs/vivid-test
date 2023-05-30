import styles from "./Frame_230Page.module.css";
import { ArtistCard } from "./ArtistCard";

export const Frame_230Page = () => {
  return (
    <div className={styles.frame_230Page0}>
      <p className={styles.frame_230Page1}>Space Walking</p>
      <ArtistCard
        property_1="Horizontal Small"
        artistName="Animakid"
        additionalInfo={true}
        totalSales="Total Sales:"
        salesNumber="34.53 ETH"
        rankingNumber2={true}
        rankingNumber="1"
      />
    </div>
  );
};
