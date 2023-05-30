import styles from "./DepannageDropdown.module.css";
import vivid_8b1ce7bf339e from "./8b1ce7bf339e.svg";
import vivid_02ba3b89dc94 from "./02ba3b89dc94.svg";
import { TextHovering } from "./TextHovering";

export const DepannageDropdown = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "dropdown":
      return (
        <div style={style} className={styles.depannageDropdown0}>
          <div className={styles.depannageDropdown1}>
            <p className={styles.depannageDropdown2}>Dépannage</p>
            <img
              src={vivid_8b1ce7bf339e.src}
              className={styles.depannageDropdown3}
            />
          </div>
        </div>
      );
    case "deppanage dropdown":
      return (
        <div style={style} className={styles.depannageDropdown4}>
          <div className={styles.depannageDropdown5}>
            <p className={styles.depannageDropdown6}>Dépannage </p>
            <img
              src={vivid_02ba3b89dc94.src}
              className={styles.depannageDropdown7}
            />
          </div>
          <div className={styles.depannageDropdown8}>
            <div className={styles.depannageDropdown9}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.depannageDropdown10}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.depannageDropdown11}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.depannageDropdown12}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.depannageDropdown13}>
              <TextHovering
                property_1="default"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                }}
              />
            </div>
            <div className={styles.depannageDropdown14}>
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
