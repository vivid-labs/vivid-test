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
            "linear-gradient(160deg, rgb(253, 185, 67, 1.00) 0%, rgb(215, 113, 231, 1.00) 100%)",
        }
      : {
          backgroundColor: "rgb(0, 0, 0)",
        };
  return (
    <div
     style={{
       ...ctaButtonVariants,
       ...override,
     }}
     className={styles.button}
     figma-id="5:186:147"
   >
    <Logo
      override={{
        position: "relative",
      }}
      figma-id="5:186:148"
    />
    <p className={styles.text} figma-id="5:186:149">
      {text}
    </p>
   </div> 
  );
};
