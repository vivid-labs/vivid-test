import styles from "./DestinationNoVariants.module.css";
import destinationNoVariants from "./destinationNoVariants.png";
import ticket from "./ticket.svg";
import timeCircle from "./timeCircle.svg";
import image from "./image.jpg";

export const DestinationNoVariants = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.destinationNoVariants}>
      <img
        src={destinationNoVariants.src}
        className={
          styles.objectFitCoverOpacity_1e774c6113f994325cf46fc15463bfab22bd57037
        }
      />
      <div
        className={
          styles.backgroundLinearGradient180degRgb217_217_217_0_00_0pcRgb0_0_0_0_20_100pc
        }
      />
      <div className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.title}>Mountains, Canada</p>
          <div className={styles.details}>
            <div className={styles.price}>
              <div className={styles.ticket}>
                <div>
                  <img src={ticket.src} className={styles.ticketImage} />
                </div>
              </div>
              <p className={styles.text_80}>$80</p>
            </div>
            <div className={styles.time}>
              <div className={styles.timeCircle}>
                <div>
                  <img
                    src={timeCircle.src}
                    className={styles.timeCircleImage}
                  />
                </div>
              </div>
              <p className={styles.text3Hours}>3 hours</p>
            </div>
          </div>
        </div>
        <div className={styles.label}>
          <img src={image.src} className={styles.image} />
          <div className={styles.name}>
            <p className={styles.nameText}>Tim Hencordin</p>
            <p className={styles.position}>City Guide</p>
          </div>
        </div>
      </div>
    </div>
  );
};
