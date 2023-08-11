import styles from "./Button.module.css";
export const Button = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div className={styles.buttonContainer} style={override}>
    <p className={styles.buttonText}>{text}</p>
   </div> 
  );
};
