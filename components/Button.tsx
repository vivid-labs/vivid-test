import styles from "./Button.module.css";
import { RocketLaunch } from "./RocketLaunch";

export const Button = ({
  style,
  property_1,
  hasLeftIcon,
  leftIcon,
  hasText,
  text,
}: {
  style?: any;
  property_1: string;
  hasLeftIcon: boolean;
  leftIcon: any;
  hasText: boolean;
  text: string;
}) => {
  const buttonProperty_1 = {
    "Primary/Filled": {
      fontSize: "22px",
    },
    "Primary/Outlined": {
      fontSize: "22px",
    },
    "Secondary/Filled": {
      fontSize: "16px",
    },
    "Secondary/Outlined": {
      fontSize: "16px",
    },
    "Tertiary/Filled": {
      fontSize: "16px",
    },
    "Tertiary/Outlined": {
      fontSize: "16px",
    },
  }[property_1];
  const buttonDivProperty_1 = {
    "Primary/Filled": {
      height: "72px",
      backgroundColor: "rgb(162, 89, 255)",
    },
    "Primary/Outlined": {
      height: "72px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "rgb(162, 89, 255)",
    },
    "Secondary/Filled": {
      height: "60px",
      backgroundColor: "rgb(162, 89, 255)",
    },
    "Secondary/Outlined": {
      height: "60px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "rgb(162, 89, 255)",
    },
    "Tertiary/Filled": {
      height: "46px",
      backgroundColor: "rgb(162, 89, 255)",
    },
    "Tertiary/Outlined": {
      height: "46px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "rgb(162, 89, 255)",
    },
  }[property_1];

  return (
    <div
      style={{
        ...buttonDivProperty_1,
        ...style,
      }}
      className={styles.button}
    >
      {hasLeftIcon ? leftIcon : null}
      <p
        style={{
          ...buttonProperty_1,
          visibility: hasText,
        }}
        className={styles.buttonText}
      >
        {text}
      </p>
    </div>
  );
};