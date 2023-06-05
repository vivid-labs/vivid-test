import styles from "./Destination.module.css";
import sizeeqSmall from "./sizeeqSmall.png";
import ticketImage1 from "./ticketImage1.svg";
import timeCircleImage from "./timeCircleImage.svg";
import image from "./image.jpg";
import ticketImage from "./ticketImage.svg";
import timeCircle from "./timeCircle.svg";
import ticket from "./ticket.svg";

export const Destination = ({ style, size }: { style?: any; size: string }) => {
  const transformRotate0_00degScale100_00pc_312_22pcTranslate0_00pc_0_48pcTransformOriginTopLeftOpacity_1e774c6113f994325cf46fc15463bfab22bd57037Size =
    {
      Large: {
        objectFit: "cover",
      },
      Medium: {
        transform:
          "rotate(0.00deg) scale(100.00%, 156.11%) translate(-0.32%, 0.23%)",
        transformOrigin: "top left",
      },
      Small: {
        transform:
          "rotate(0.00deg) scale(100.00%, 312.22%) translate(0.00%, 0.48%)",
        transformOrigin: "top left",
      },
    }[size];
  const destinationSize = {
    Large: {
      height: "540px",
    },
    Medium: {
      height: "360px",
    },
    Small: {
      height: "180px",
    },
  }[size];
  let ticketSrc;
  if (size === "Large") {
    ticketSrc = ticketImage1;
  } else if (size === "Medium") {
    ticketSrc = ticketImage;
  } else {
    ticketSrc = ticket;
  }
  let timeCircleSrc;
  if (size === "Large") {
    timeCircleSrc = timeCircleImage;
  } else if (size === "Medium") {
    timeCircleSrc = timeCircle;
  } else {
    timeCircleSrc = timeCircle;
  }

  return (
    <div
      style={{
        ...destinationSize,
        ...style,
      }}
      className={styles.destination}
    >
      <img
        src={sizeeqSmall.src}
        style={
          transformRotate0_00degScale100_00pc_312_22pcTranslate0_00pc_0_48pcTransformOriginTopLeftOpacity_1e774c6113f994325cf46fc15463bfab22bd57037Size
        }
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
                  <img src={ticketSrc.src} className={styles.ticketImage} />
                </div>
              </div>
              <p className={styles.text_80}>$80</p>
            </div>
            <div className={styles.time}>
              <div className={styles.timeCircle}>
                <div>
                  <img
                    src={timeCircleSrc.src}
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
