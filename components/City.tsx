import styles from "./City.module.css";
import { Lake } from "./Lake";
import ticket from "./ticket.svg";
import timeCircleImage from "./timeCircleImage.svg";
import image from "./image.jpg";
import dollarSign from "./dollarSign.png";
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
  switch (size) {
    case "Large":
      return (
        <div style={override} className={styles.city}>
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
                        src={timeCircleImage.src}
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
    case "Medium":
      return (
        <div style={override} className={styles.cityComponent}>
          <div className={styles.backgroundDiv}>
            {backgroundImage}
            <div className={styles.rectangle_1Div} />
          </div>
          <div className={styles.contentDiv}>
            <div className={styles.headingDiv}>
              <p className={styles.titleText}>{title}</p>
              <div className={styles.detailsDiv}>
                <div className={styles.priceDiv}>
                  <div className={styles.ticketDiv}>
                    <img src={dollarSign.src} className={styles.dollarSign} />
                  </div>
                  <p className={styles.text_80Text}>{price}</p>
                </div>
                <div className={styles.timeDiv}>
                  <div className={styles.timeCircleDiv}>
                    <div>
                      <img
                        src={timeCircle.src}
                        className={styles.timeCircleImage1}
                      />
                    </div>
                  </div>
                  <p className={styles.text3HoursText}>{time}</p>
                </div>
              </div>
            </div>
            <div className={styles.labelDiv}>
              <img src={image.src} className={styles.imageImage} />
              <div className={styles.nameDiv}>
                <p className={styles.nameText1}>{guideName}</p>
                <p className={styles.positionText}>{guidePosition}</p>
              </div>
            </div>
          </div>
        </div>
      );
    case "Small":
      return (
        <div style={override} className={styles.cityComponent1}>
          <div className={styles.backgroundDiv1}>
            {backgroundImage}
            <div className={styles.rectangle_1Div1} />
          </div>
          <div className={styles.contentDiv1}>
            <div className={styles.headingDiv1}>
              <p className={styles.titleText1}>{title}</p>
              <div className={styles.detailsDiv1} />
            </div>
            <div className={styles.labelDiv1}>
              <img src={image.src} className={styles.imageImage1} />
              <div className={styles.nameDiv1}>
                <p className={styles.nameText2}>{guideName}</p>
                <p className={styles.positionText1}>{guidePosition}</p>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
