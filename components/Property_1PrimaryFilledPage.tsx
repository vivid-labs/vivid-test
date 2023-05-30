import styles from "./Property_1PrimaryFilledPage.module.css";
import { RocketLaunch } from "./RocketLaunch";

export const Property_1PrimaryFilledPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.property_1PrimaryFilledPage0}>
      <RocketLaunch
        style={{
          height: "20px",
          width: "20px",
        }}
      />
      <p className={styles.property_1PrimaryFilledPage1}>Button</p>
    </div>
  );
};
