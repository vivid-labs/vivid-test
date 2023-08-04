import styles from "./Feature.module.css";
import { Link } from "./Link";
import { VolumeDown } from "./VolumeDown";
export const Feature = ({
  override,
  title,
  description,
  icon,
}: {
  override?: React.CSSProperties;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className={styles.featureComponent} style={override}>
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
