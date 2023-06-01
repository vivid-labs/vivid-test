import styles from "./City.module.css";
import { Lake } from "./Lake";
import ticket from "./ticket.svg";
import timeCircle from "./timeCircle.svg";
import image from "./image.jpg";

export const City = ({
  style,
  backgroundImage,
  title,
  price,
  time,
  guideName,
  guidePosition,
}: {
  style?: any;
  backgroundImage: any;
  title: string;
  price: string;
  time: string;
  guideName: string;
  guidePosition: string;
}) => {
  return (
    <div style={style} className={styles.city}>
      <div className={styles.background}>
        {backgroundImage}
        <div className={styles.rectangle_1} />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.title}>{title}</p>
          <div className={styles.details}>
            <div className={styles.price}>
              <div className={styles.ticket}>
                <div>
                  <img src={ticket.src} className={styles.ticketImage} />
                </div>
              </div>
              <p className={styles.text_80}>{price}</p>
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
