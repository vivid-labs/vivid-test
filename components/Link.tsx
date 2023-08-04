import styles from "./Link.module.css";
export const Link = ({
  override,
  linkText,
}: {
  override?: React.CSSProperties;
  linkText: string;
}) => {
  return (
    <div className={styles.linkContainer} style={override}>
    <p className={styles.linkText}>{linkText}</p>
   </div> 
  );
};
