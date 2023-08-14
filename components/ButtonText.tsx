import styles from "./ButtonText.module.css";
export const ButtonText = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.buttonTextContainer} style={override}>
    <p className={styles.buttonPrimary}>Button</p>
   </div> 
  );
};
