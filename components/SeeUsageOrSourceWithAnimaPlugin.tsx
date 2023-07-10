import styles from "./SeeUsageOrSourceWithAnimaPlugin.module.css";
import tryIt from "./tryIt.svg";
import image_15 from "./image_15.png";
import { SystemHandPointing } from "./SystemHandPointing";
import { PrimaryButton } from "./PrimaryButton";
export const SeeUsageOrSourceWithAnimaPlugin = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div style={override} className={styles.seeUsageOrSourceWithAnimaPlugin}>
      <div className={styles.content}>
        <div className={styles.frame_16145}>
          <p className={styles.inThePluginInspect}>In the plugin inspect</p>
          <p className={styles.toggleToSwitchBetweenUsageAndSource}>
            Toggle to switch between usage and source.
          </p>
        </div>
        <img src={tryIt.src} className={styles.tryIt} />
      </div>
      <div className={styles.visuals}>
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
        />
        <p className={styles.selectTheButton}>Select the button</p>
        <p className={styles.tryItOut}>Try it out</p>
      </div>
    </div>
  );
};
