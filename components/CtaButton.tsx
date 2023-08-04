import styles from "./CtaButton.module.css";
import { Logo } from "./Logo";
export const CtaButton = ({
  override,
  variants,
  text,
}: {
  override?: any;
  variants: string;
  text: string;
}) => {
  const ctaButtonVariants =
    variants === "Gradient"
      ? {
          background:
            "linear-gradient(160deg, rgb(253, 185, 67) 0%, rgb(215, 113, 231) 100%)",
        }
      : {
          backgroundColor: "rgb(0, 0, 0)",
        };
  return (
    <div
     className={styles.buttonComponent}
     style={{
       ...ctaButtonVariants,
       ...override,
     }}
   >
    <Logo />
    <p className={styles.text}>{text}</p>
   </div> 
  );
};
