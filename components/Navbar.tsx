import styles from "./Navbar.module.css";
import vivid_4a7d82363ef3 from "./4a7d82363ef3.svg";
import { DepannageDropdown } from "./DepannageDropdown";
import { MarketDropdown } from "./MarketDropdown";
import { AProposDropdown } from "./AProposDropdown";
import { BtnSupport } from "./BtnSupport";
import vivid_22c6079d2b5f from "./22c6079d2b5f.svg";

export const Navbar = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "depannage navbar":
      return (
        <div style={style} className={styles.navbar0}>
          <img src={vivid_4a7d82363ef3.src} className={styles.navbar1} />
          <div className={styles.navbar2}>
            <DepannageDropdown property_1="deppanage dropdown" />
            <MarketDropdown property_1="dropdown" style={{}} />
            <AProposDropdown property_1="dropdown" style={{}} />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
    case "default":
      return (
        <div style={style} className={styles.navbar3}>
          <img src={vivid_22c6079d2b5f.src} className={styles.navbar4} />
          <div className={styles.navbar5}>
            <DepannageDropdown property_1="dropdown" style={{}} />
            <MarketDropdown property_1="dropdown" style={{}} />
            <AProposDropdown property_1="dropdown" style={{}} />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
    case "market navbar":
      return (
        <div style={style} className={styles.navbar6}>
          <img src={vivid_4a7d82363ef3.src} className={styles.navbar7} />
          <div className={styles.navbar8}>
            <DepannageDropdown property_1="dropdown" style={{}} />
            <MarketDropdown property_1="deppanage dropdown" />
            <AProposDropdown property_1="dropdown" style={{}} />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
    case "a propos navbar":
      return (
        <div style={style} className={styles.navbar9}>
          <img src={vivid_4a7d82363ef3.src} className={styles.navbar10} />
          <div className={styles.navbar11}>
            <DepannageDropdown property_1="dropdown" style={{}} />
            <MarketDropdown property_1="dropdown" style={{}} />
            <AProposDropdown property_1="deppanage dropdown" />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
  }
};
