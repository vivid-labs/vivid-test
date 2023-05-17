import styles from "./Feature.module.css";
import { VolumeDown } from "./VolumeDown";

export const Feature = ({
  title,
  description,
  moreTitle,
  icon,
}: {
  title: string;
  description: string;
  moreTitle: string;
  icon: any;
}) => {
  return (
    <div className={styles.feature0}>
      <div className={styles.feature1}>
        <p className={styles.feature2}>{title}</p>
        <p className={styles.feature3}>{description}</p>
        <div className={styles.feature4}>
          <p className={styles.feature5}>{moreTitle}</p>
        </div>
      </div>
      {icon}
    </div>
  );
};
