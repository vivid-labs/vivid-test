import styles from "./Property_1TertiaryFilledPage.module.css";
import { RocketLaunch } from "./RocketLaunch";

export const Property_1TertiaryFilledPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.property_1TertiaryFilledPage0}>
      <RocketLaunch
        style={{
          height: "20px",
          width: "20px",
        }}
      />
      <p className={styles.property_1TertiaryFilledPage1}>Button</p>
    </div>
  );
};
