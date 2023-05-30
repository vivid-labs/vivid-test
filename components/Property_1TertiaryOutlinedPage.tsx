import styles from "./Property_1TertiaryOutlinedPage.module.css";
import { RocketLaunch } from "./RocketLaunch";

export const Property_1TertiaryOutlinedPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.property_1TertiaryOutlinedPage0}>
      <RocketLaunch
        style={{
          height: "20px",
          width: "20px",
        }}
      />
      <p className={styles.property_1TertiaryOutlinedPage1}>Button</p>
    </div>
  );
};
