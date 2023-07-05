import styles from "./City.module.css";
import { Lake } from "./Lake";
import ticketImage1 from "./ticketImage1.svg";
import timeCircleImage from "./timeCircleImage.svg";
import image from "./image.jpg";
import ticketImage from "./ticketImage.svg";
import ticket from "./ticket.svg";
import timeCircle from "./timeCircle.svg";
export const City = ({
  override,
  size,
  backgroundImage,
  title,
  price,
  time,
  guideName,
  guidePosition,
}: {
  override?: any;
  size: string;
  backgroundImage: any;
  title: string;
  price: string;
  time: string;
  guideName: string;
  guidePosition: string;
}) => {
  const contentSize = {
    Large: {
      height: "562px",
    },
    Medium: {
      height: "360px",
    },
    Small: {
      height: "180px",
    },
  }[size];
  const citySize = {
    Large: {
      height: "562px",
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
    timeCircleSrc = timeCircleImage;
  } else {
    timeCircleSrc = timeCircle;
  }
  return (
    <div
     style={{
       ...citySize,
       ...override,
     }}
     className={styles.city}
   >
    <div className={styles.background}>
      {backgroundImage}
      <div className={styles.gradientOverlay} />
    </div>
    <div style={contentSize} className={styles.content}>
      <div className={styles.infoContainer}>
        <p className={styles.sectionTitle}>{title}</p>
        <div className={styles.details}>
          <div className={styles.price}>
            <div className={styles.ticketWrapper}>
              <div>
                <img src={ticketSrc.src} className={styles.ticketImage} />
              </div>
            </div>
            <p className={styles.ticketPrice}>{price}</p>
          </div>
          <div className={styles.time}>
            <div className={styles.timeCircleWrapper}>
              <div>
                <img
                  src={timeCircleSrc.src}
                  className={styles.timeCircleImage}
                />
              </div>
            </div>
            <p className={styles.timeText}>{time}</p>
          </div>
        </div>
      </div>
      <div className={styles.guideLabel}>
        <img src={image.src} className={styles.guideImage} />
        <div className={styles.guideInfoContainer}>
          <p className={styles.guideName}>{guideName}</p>
          <p className={styles.guidePosition}>{guidePosition}</p>
        </div>
      </div>
    </div>
   </div> 
  );
};
