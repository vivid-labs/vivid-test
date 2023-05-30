import styles from "./AProposDropdown.module.css";
import vivid_8b1ce7bf339e from "./8b1ce7bf339e.svg";
import vivid_02ba3b89dc94 from "./02ba3b89dc94.svg";
import { TextHovering } from "./TextHovering";

export const AProposDropdown = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "dropdown":
      return (
        <div style={style} className={styles.aProposDropdown0}>
          <div className={styles.aProposDropdown1}>
            <p className={styles.aProposDropdown2}>À propos</p>
            <img
              src={vivid_8b1ce7bf339e.src}
              className={styles.aProposDropdown3}
            />
          </div>
        </div>
      );
    case "deppanage dropdown":
      return (
        <div style={style} className={styles.aProposDropdown4}>
          <div className={styles.aProposDropdown5}>
            <p className={styles.aProposDropdown6}>À propos </p>
            <img
              src={vivid_02ba3b89dc94.src}
              className={styles.aProposDropdown7}
            />
          </div>
          <div className={styles.aProposDropdown8}>
            <div className={styles.aProposDropdown9}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.aProposDropdown10}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.aProposDropdown11}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.aProposDropdown12}>
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
