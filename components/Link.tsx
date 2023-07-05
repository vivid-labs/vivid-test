import styles from "./Link.module.css";

export const Link = ({
  override,
  linkText,
}: {
  override?: any;
  linkText: string;
}) => {
  return (
    <div style={override} className={styles.linkClass}>
    <p className={styles.defaultLink}>{linkText}</p>
   </div> 
  );
};
