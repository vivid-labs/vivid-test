import styles from "./Link.module.css";
export const Link = ({
  override,
  linkText,
}: {
  override?: React.CSSProperties;
  linkText: string;
}) => {
  return (
    <div className={styles.default} style={override}>
    <p className={styles.linkComponent}>{linkText}</p>
   </div> 
  );
};
