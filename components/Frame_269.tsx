import styles from "./Frame_269.module.css";
export const Frame_269 = ({
  override,
  showText,
  text,
}: {
  override?: any;
  showText: boolean;
  text: string;
}) => {
  return (
    <div style={override} className={styles.frameContainer}>
    {showText ? <p className={styles.frameText}>{text}</p> : null}
   </div> 
  );
};
