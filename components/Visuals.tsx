import styles from "./Visuals.module.css";
import image_15 from "./image_15.png";
import { SystemHandPointing } from "./SystemHandPointing";
import { PrimaryButton } from "./PrimaryButton";
export const Visuals = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.visuals}>
      <div>
        <div className={styles.rectangle_2747} />
        <div className={styles.image_15}>
          <img src={image_15.src} className={styles.image_15Image} />
        </div>
      </div>
      <p className={styles.toggleToViewSource}>Toggle to view source</p>
      <SystemHandPointing />
      <PrimaryButton
        state="Default"
        type="Primary"
        text="Select Me"
        showIcon={true}
        override={{
          height: "40px",
          width: "fit-content",
        }}
      />
      <p className={styles.selectTheButton}>Select the button</p>
      <p className={styles.tryItOut}>Try it out</p>
    </div>
  );
};
