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
      <div className={styles.buttonPrimaryRight} style={override}>
      <ButtonText />
      {hasIcon ? icon : null}
      <div className={styles.buttonCornerDiv2} />
     </div> 
    );
  } else if (variant === "Secondary" && iconSide === "Right") {
    return (
      <div className={styles.buttonSecondary} style={override}>
      <ButtonText />
      {hasIcon ? icon : null}
      <div className={styles.buttonCornerDiv1} />
     </div> 
    );
  } else if (variant === "Primary" && iconSide === "Left") {
    return (
      <div className={styles.buttonPrimaryLeft} style={override}>
      {hasIcon ? icon : null}
      <ButtonText />
      <div className={styles.buttonCornerDiv} />
     </div> 
    );
  } else if (variant === "Secondary" && iconSide === "Left") {
    return (
      <div className={styles.buttonPrimary} style={override}>
      {hasIcon ? icon : null}
      <ButtonText />
      <div className={styles.buttonCorner} />
     </div> 
    );
  } else {
    return null;
  }
};
