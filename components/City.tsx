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
    <div className={styles.cityBackground}>
      {backgroundImage}
      <div className={styles.cityRectangle} />
    </div>
    <div style={contentSize} className={styles.cityContent}>
      <div className={styles.cityHeading}>
        <p className={styles.cityTitle}>{title}</p>
        <div className={styles.cityDetails}>
          <div className={styles.cityPrice}>
            <div className={styles.cityTicket}>
              <div>
                <img src={ticketSrc.src} className={styles.cityTicketImage} />
              </div>
            </div>
            <p className={styles.cityPriceText}>{price}</p>
          </div>
          <div className={styles.cityTime}>
            <div className={styles.cityTimeCircle}>
              <div>
                <img
                  src={timeCircleSrc.src}
                  className={styles.cityTimeCircleImage}
                />
              </div>
            </div>
            <p className={styles.cityTimeText}>{time}</p>
          </div>
        </div>
      </div>
      <div className={styles.cityLabel}>
        <img src={image.src} className={styles.cityImage} />
        <div className={styles.cityName}>
          <p className={styles.cityNameText}>{guideName}</p>
          <p className={styles.cityPosition}>{guidePosition}</p>
        </div>
      </div>
    </div>
   </div> 
  );
};
