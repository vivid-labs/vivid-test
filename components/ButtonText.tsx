import styles from "./ButtonText.module.css";
export const ButtonText = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.buttonTextComponent} style={override}>
      <p className={styles.button}>Button</p>
    </div>
  );
};
