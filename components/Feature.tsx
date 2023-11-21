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
    <div className={styles.featureContent}>
      <p className={styles.guideTitle}>{title}</p>
      <p className={styles.audioGuideDescription}>
        {description}
      </p>
      <Link linkText="Select Guide" />
    </div>
    {icon}
   </div> 
  );
};
