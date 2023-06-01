import styles from "./Feature.module.css";
import { VolumeDown } from "./VolumeDown";

export const Feature = ({
  style,
  title,
  description,
  moreTitle,
  icon,
}: {
  style?: any;
  title: string;
  description: string;
  moreTitle: string;
  icon: any;
}) => {
  return (
    <div style={style} className={styles.feature}>
      <div className={styles.frame_7}>
        <p className={styles.audioGuide}>{title}</p>
        <p className={styles.travelOnYourOwnUseTheServicesOfAnAudioGuide}>
          {description}
        </p>
        <div className={styles.frame_6}>
          <p className={styles.selectGuide}>{moreTitle}</p>
        </div>
      </div>
      {icon}
    </div>
  );
};
