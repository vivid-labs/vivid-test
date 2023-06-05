import styles from "./Link.module.css";

export const Link = ({
  style,
  linkText,
}: {
  style?: any;
  linkText: string;
}) => {
  return (
    <div style={style} className={styles.link}>
      <p className={styles.default}>{linkText}</p>
    </div>
  );
};
