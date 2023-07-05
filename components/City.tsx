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
        <div className={styles.rectangle_1} />
      </div>
      <div style={contentSize} className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.title}>{title}</p>
          <div className={styles.details}>
            <div className={styles.price}>
              <div className={styles.ticket}>
                <div>
                  <img src={ticketSrc.src} className={styles.ticketImage} />
                </div>
              </div>
              <p className={styles.text_80}>{price}</p>
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
              <p className={styles.text3Hours}>{time}</p>
            </div>
          </div>
        </div>
        <div className={styles.label}>
          <img src={image.src} className={styles.image} />
          <div className={styles.name}>
            <p className={styles.nameText}>{guideName}</p>
            <p className={styles.position}>{guidePosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
