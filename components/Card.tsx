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
      className={styles.cardComponent}
      style={{
        ...cardMode,
        ...override,
      }}
    >
      <CardHeader titleMode={titleMode} sunSrc={sunSrc} />
      <CardBodyText bodyTextMode={bodyTextMode} />
      <CardFooter
        themeMode={themeMode}
        buttonMode={buttonMode}
        buttonTextMode={buttonTextMode}
      />
    </div>
  );
};

const CardHeader = ({ titleMode, sunSrc }: any) => (
  <div className={styles.cardHeader}>
    <p
      className={styles.cardTitle}
      style={{
        ...titleMode,
      }}
    >
      Trends
    </p>
    <img className={styles.cardSun} src={sunSrc.src} />
  </div>
);

const CardBodyText = ({ bodyTextMode }: any) => (
  <div className={styles.cardBody}>
    <p
      className={styles.cardBodyText}
      style={{
        ...bodyTextMode,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididun...
    </p>
  </div>
);

const CardFooter = ({ themeMode, buttonMode, buttonTextMode }: any) => (
  <div className={styles.cardFooter}>
    <p
      className={styles.cardTheme}
      style={{
        ...themeMode,
      }}
    >
      Theme
    </p>
    <div
      className={styles.cardButton}
      style={{
        ...buttonMode,
      }}
    >
      <p
        className={styles.cardButtonText}
        style={{
          ...buttonTextMode,
        }}
      >
        Click me!
      </p>
    </div>
  </div>
);
