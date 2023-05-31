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
  style: any;
  property_1: string;
  hasLeftIcon: boolean;
  leftIcon: any;
  hasText: boolean;
  text: string;
}) => {
  const property_1_0 = {
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

  return (
    <div style={style} className={styles.button}>
      <RocketLaunch
        style={{
          height: "20px",
          width: "20px",
        }}
      />
      <p
        style={{
          ...property_1_0,
          visibility: hasText,
        }}
        className={styles.buttonText}
      >
        {text}
      </p>
    </div>
  );
};
