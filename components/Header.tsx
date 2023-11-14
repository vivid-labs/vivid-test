import styles from "./Header.module.css";
export const Header = ({
  override,
  headerText,
}: {
  override?: React.CSSProperties;
  headerText: string;
}) => {
  return (
    <div className={styles.headerComponent} style={override}>
      <p className={styles.mail}>{headerText}</p>
    </div>
  );
};
