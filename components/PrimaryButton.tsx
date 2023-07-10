import styles from "./PrimaryButton.module.css";
import { Icon } from "./Icon";
export const PrimaryButton = ({
  override,
  state,
  type,
  text,
  showIcon,
}: {
  override?: any;
  state: string;
  type: string;
  text: string;
  showIcon: boolean;
}) => {
  const labelState = {
    Default: {
      color: "rgb(255, 255, 255)",
    },
    Hover: {
      color: "rgb(255, 255, 255)",
    },
    Disabled: {
      color: "rgb(134, 134, 134)",
    },
  }[state];
  const primaryButtonState = {
    Default: {
      backgroundColor: "rgb(0, 147, 121)",
    },
    Hover: {
      backgroundColor: "rgb(1, 109, 90)",
    },
    Disabled: {
      backgroundColor: "rgb(184, 184, 184)",
    },
  }[state];
  const labelTextType =
    type === "Secondary"
      ? {
          color: "rgb(184, 184, 184)",
        }
      : {
          color: "rgb(134, 134, 134)",
        };
  const primaryButtonDivType =
    type === "Secondary"
      ? {
          borderStyle: "solid",
          borderColor: "rgb(184, 184, 184)",
          borderWidth: "1px",
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(184, 184, 184)",
        };
  return (
    <div
      style={{
        ...primaryButtonState,
        ...primaryButtonDivType,
        ...override,
      }}
      className={styles.primaryButton}
    >
      <p
        style={{
          ...labelState,
          ...labelTextType,
        }}
        className={styles.label}
      >
        {text}
      </p>
      {showIcon ? <Icon name="ArrowRight" /> : null}
    </div>
  );
};
