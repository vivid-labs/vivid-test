import styles from "./Button.module.css";
export const Button = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div className={styles.buttonComponent} style={override}>
      <p className={styles.removeAccounts}>{text}</p>
    </div>
  );
};
