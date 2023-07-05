import styles from "./Link.module.css";
export const Link = ({
  override,
  linkText,
}: {
  override?: any;
  linkText: string;
}) => {
  return (
    <div style={override} className={styles.link}>
      <p className={styles.default}>{linkText}</p>
    </div>
  );
};
