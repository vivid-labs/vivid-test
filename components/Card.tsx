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
      className={styles.card}
      style={{
        ...cardMode,
        ...override,
      }}
    >
      <Trends titleMode={titleMode} sunSrc={sunSrc} />
      <BodyText bodyTextMode={bodyTextMode} />
      <ThemeFooter
        themeMode={themeMode}
        buttonMode={buttonMode}
        buttonTextMode={buttonTextMode}
      />
    </div>
  );
};

const Trends = ({ titleMode, sunSrc }: any) => (
  <div className={styles.header}>
    <p
      className={styles.container}
      style={{
        ...titleMode,
      }}
    >
      Trends
    </p>
    <img className={styles.title} src={sunSrc.src} />
  </div>
);

const BodyText = ({ bodyTextMode }: any) => (
  <div className={styles.body}>
    <p
      className={styles.text}
      style={{
        ...bodyTextMode,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididun...
    </p>
  </div>
);

const ThemeFooter = ({ themeMode, buttonMode, buttonTextMode }: any) => (
  <div className={styles.footer}>
    <p
      className={styles.theme}
      style={{
        ...themeMode,
      }}
    >
      Theme
    </p>
    <div
      className={styles.button}
      style={{
        ...buttonMode,
      }}
    >
      <p
        className={styles.buttonText}
        style={{
          ...buttonTextMode,
        }}
      >
        Click me!
      </p>
    </div>
  </div>
);
