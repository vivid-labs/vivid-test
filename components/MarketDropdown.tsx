import styles from "./MarketDropdown.module.css";
import vivid_628dec16981a from "./628dec16981a.svg";
import vivid_02ba3b89dc94 from "./02ba3b89dc94.svg";
import { TextHovering } from "./TextHovering";

export const MarketDropdown = ({ property_1 }: { property_1: string }) => {
  switch (property_1) {
    case "dropdown":
      return (
        <div className={styles.marketDropdown0}>
          <div className={styles.marketDropdown1}>
            <p className={styles.marketDropdown2}>Market</p>
            <img
              src={vivid_628dec16981a.src}
              className={styles.marketDropdown3}
            />
          </div>
        </div>
      );
    case "deppanage dropdown":
      return (
        <div className={styles.marketDropdown4}>
          <div className={styles.marketDropdown5}>
            <p className={styles.marketDropdown6}>Market </p>
            <img
              src={vivid_02ba3b89dc94.src}
              className={styles.marketDropdown7}
            />
          </div>
          <div className={styles.marketDropdown8}>
            <div className={styles.marketDropdown9}>
              <TextHovering property_1="default" />
            </div>
            <div className={styles.marketDropdown10}>
              <TextHovering property_1="default" />
            </div>
            <div className={styles.marketDropdown11}>
              <TextHovering property_1="default" />
            </div>
          </div>
        </div>
      );
  }
};
