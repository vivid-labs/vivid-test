import styles from "./NoOutlineLogo.module.css";
import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.noOutlineLogo} style={override}>
    <img className={styles.logo} src={logo_2.src} />
   </div> 
  );
};
