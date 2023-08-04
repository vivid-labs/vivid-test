import styles from "./Link.module.css";
export const Link = ({
  override,
  linkText,
}: {
  override?: React.CSSProperties;
  linkText: string;
}) => {
  return (
    <div className={styles.linkComponent} style={override}>
      <p className={styles.default}>{linkText}</p>
    </div>
  );
};
