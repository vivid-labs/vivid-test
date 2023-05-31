import styles from "./Link.module.css";

export const Link = ({
  style,
  linkText,
}: {
  style?: any;
  linkText: string;
}) => {
  return (
    <div style={style} className={styles.link0}>
      <p className={styles.link1}>{linkText}</p>
    </div>
  );
};
