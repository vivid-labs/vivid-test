import styles from "./Card.module.css";
import sunImage from "./sunImage.svg";
import sun from "./sun.svg";
export const Card = ({
  override,
  mode,
}: {
  override?: React.CSSProperties;
  mode: string;
}) => {
  const titleMode =
    mode === "Dark"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(0, 0, 0)",
        };
  const bodyTextMode =
    mode === "Dark"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(0, 0, 0)",
        };
  const themeMode =
    mode === "Dark"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(0, 0, 0)",
        };
  const buttonTextMode =
    mode === "Dark"
      ? {
          color: "rgb(0, 0, 0)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const buttonMode =
    mode === "Dark"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(7, 14, 19)",
        };
  const cardMode =
    mode === "Dark"
      ? {
          backgroundColor: "rgb(7, 14, 19)",
        }
      : {
          backgroundColor: "rgb(255, 255, 255)",
        };
  let sunSrc;
  if (mode === "Light") {
    sunSrc = sunImage;
  } else {
    sunSrc = sun;
  }
  return (
    <div
     className={styles.cardComponentFooter}
     style={{
       ...cardMode,
       ...override,
     }}
   >
    <div className={styles.cardComponentSun}>
      <p
        className={styles.cardComponent}
        style={{
          ...titleMode,
        }}
      >
        Trends
      </p>
      <img className={styles.cardComponentTitle} src={sunSrc.src} />
    </div>
    <div className={styles.cardComponentBodyText}>
      <p
        className={styles.cardComponentHeader}
        style={{
          ...bodyTextMode,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididun...
      </p>
    </div>
    <div className={styles.cardComponentButton}>
      <p
        className={styles.cardComponentBody}
        style={{
          ...themeMode,
        }}
      >
        Theme
      </p>
      <div
        className={styles.cardComponentButtonText}
        style={{
          ...buttonMode,
        }}
      >
        <p
          className={styles.cardComponentTheme}
          style={{
            ...buttonTextMode,
          }}
        >
          Click me!
        </p>
      </div>
    </div>
   </div> 
  );
};
