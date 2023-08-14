import styles from "./Button.module.css";
import { ButtonText } from "./ButtonText";
import { Check } from "./Check";
export const Button = ({
  override,
  variant,
  iconSide,
  hasIcon,
  icon,
}: {
  override?: React.CSSProperties;
  variant: string;
  iconSide: string;
  hasIcon: boolean;
  icon: React.ReactNode;
}) => {
  if (variant === "Primary" && iconSide === "Right") {
    return (
      <div className={styles.buttonComponent3} style={override}>
        <ButtonText />
        {hasIcon ? icon : null}
        <div className={styles.cornerDiv2} />
      </div>
    );
  } else if (variant === "Secondary" && iconSide === "Right") {
    return (
      <div className={styles.buttonComponent2} style={override}>
        <ButtonText />
        {hasIcon ? icon : null}
        <div className={styles.cornerDiv1} />
      </div>
    );
  } else if (variant === "Primary" && iconSide === "Left") {
    return (
      <div className={styles.buttonComponent1} style={override}>
        {hasIcon ? icon : null}
        <ButtonText />
        <div className={styles.cornerDiv} />
      </div>
    );
  } else if (variant === "Secondary" && iconSide === "Left") {
    return (
      <div className={styles.buttonComponent} style={override}>
        {hasIcon ? icon : null}
        <ButtonText />
        <div className={styles.corner} />
      </div>
    );
  } else {
    return null;
  }
};
