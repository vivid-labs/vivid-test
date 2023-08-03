import styles from "./Button.module.css";
export const Button = ({
  override,
  type,
  text,
}: {
  override?: any;
  type: string;
  text: string;
}) => {
  const buttonType =
    type === "Primary"
      ? {
          backgroundColor: "rgb(244, 86, 154)",
        }
      : {
          backgroundColor: "rgb(0, 0, 0)",
        };
  return (
    <div
     className={styles.getStarted}
     style={{
       ...buttonType,
       ...override,
     }}
   >
    <p className={styles.button}>{text}</p>
   </div> 
  );
};
