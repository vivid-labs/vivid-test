import styles from "./NoOutlineLogo.module.css";
import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.noOutlineLogoComponent} style={override}>
      <img className={styles.logo_2} src={logo_2.src} />
    </div>
  );
};
