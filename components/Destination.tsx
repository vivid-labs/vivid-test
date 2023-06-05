import styles from "./Destination.module.css";
import ticketImage from "./ticketImage.svg";
import timeCircle from "./timeCircle.svg";
import ticket from "./ticket.svg";

export const Destination = ({ style, size }: { style?: any; size: string }) => {
  const contentSize = {
    Large: {
      width: "200px",
    },
    Medium: {
      width: "376px",
    },
    Small: {
      width: "376px",
    },
  }[size];
  const destinationSize = {
    Large: {
      width: "fit-content",
      height: "540px",
    },
    Medium: {
      width: "200px",
      height: "360px",
    },
    Small: {
      width: "200px",
      height: "180px",
    },
  }[size];
  let ticketSrc;
  if (size === "Large") {
    ticketSrc = ticketImage;
  } else if (size === "Medium") {
    ticketSrc = ticket;
  } else {
    ticketSrc = ticket;
  }

  return (
    <div
      style={{
        ...destinationSize,
        ...style,
      }}
      className={styles.destination}
    >
      <div style={contentSize} className={styles.content}>
        <div className={styles.heading}>
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
                    src={timeCircle.src}
                    className={styles.timeCircleImage}
                  />
                </div>
              </div>
              <p className={styles.text3Hours}>3 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
