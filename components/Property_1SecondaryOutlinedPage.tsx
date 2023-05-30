import styles from "./Property_1SecondaryOutlinedPage.module.css";
import { RocketLaunch } from "./RocketLaunch";

export const Property_1SecondaryOutlinedPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.property_1SecondaryOutlinedPage0}>
      <RocketLaunch
        style={{
          height: "20px",
          width: "20px",
        }}
      />
      <p className={styles.property_1SecondaryOutlinedPage1}>Button</p>
    </div>
  );
};
