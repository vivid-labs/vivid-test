import styles from "./Feature.module.css";
import { Link } from "./Link";
import { VolumeDown } from "./VolumeDown";

export const Feature = ({
  style,
  title,
  description,
  icon,
}: {
  style?: any;
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <div style={style} className={styles.feature}>
      <div className={styles.content}>
        <p className={styles.audioGuide}>{title}</p>
        <p className={styles.travelOnYourOwnUseTheServicesOfAnAudioGuide}>
          {description}
        </p>
        <Link linkText="Select Guide" />
      </div>
      {icon}
    </div>
  );
};
