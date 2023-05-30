import styles from "./MarketDropdown.module.css";
import vivid_8b1ce7bf339e from "./8b1ce7bf339e.svg";
import vivid_02ba3b89dc94 from "./02ba3b89dc94.svg";
import { TextHovering } from "./TextHovering";

export const MarketDropdown = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "dropdown":
      return (
        <div style={style} className={styles.marketDropdown0}>
          <div className={styles.marketDropdown1}>
            <p className={styles.marketDropdown2}>Market</p>
            <img
              src={vivid_8b1ce7bf339e.src}
              className={styles.marketDropdown3}
            />
          </div>
        </div>
      );
    case "deppanage dropdown":
      return (
        <div style={style} className={styles.marketDropdown4}>
          <div className={styles.marketDropdown5}>
            <p className={styles.marketDropdown6}>Market </p>
            <img
              src={vivid_02ba3b89dc94.src}
              className={styles.marketDropdown7}
            />
          </div>
          <div className={styles.marketDropdown8}>
            <div className={styles.marketDropdown9}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.marketDropdown10}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.marketDropdown11}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
          </div>
        </div>
      );
  }
};
