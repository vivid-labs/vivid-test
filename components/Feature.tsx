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
    <div className={styles.featureComponentWrapper} style={override}>
    <div className={styles.contentWrapper}>
      <p className={styles.featureButton}>{title}</p>
      <p className={styles.descriptionText}>
        {description}
      </p>
      <Link linkText="Select Guide" />
    </div>
    {icon}
   </div> 
  );
};
