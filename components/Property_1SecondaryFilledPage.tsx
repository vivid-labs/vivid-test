import styles from "./Property_1SecondaryFilledPage.module.css";
import { RocketLaunch } from "./RocketLaunch";

export const Property_1SecondaryFilledPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.property_1SecondaryFilledPage0}>
      <RocketLaunch
        style={{
          height: "20px",
          width: "20px",
        }}
      />
      <p className={styles.property_1SecondaryFilledPage1}>Button</p>
    </div>
  );
};
