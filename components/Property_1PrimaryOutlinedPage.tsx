import styles from "./Property_1PrimaryOutlinedPage.module.css";
import { RocketLaunch } from "./RocketLaunch";

export const Property_1PrimaryOutlinedPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.property_1PrimaryOutlinedPage0}>
      <RocketLaunch
        style={{
          height: "20px",
          width: "20px",
        }}
      />
      <p className={styles.property_1PrimaryOutlinedPage1}>Button</p>
    </div>
  );
};
