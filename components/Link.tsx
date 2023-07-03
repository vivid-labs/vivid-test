import styles from "./Link.module.css";

export const Link = ({
  override,
  linkText,
}: {
  override?: any;
  linkText: string;
}) => {
  return (
    <div style={override} className={styles.linkContainer}>
    <p className={styles.linkLabel}>{linkText}</p>
   </div> 
  );
};
