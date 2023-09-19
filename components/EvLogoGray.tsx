import styles from "./EvLogoGray.module.css";
import evLogoGray from "./evLogoGray.svg";
export const EvLogoGray = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
     className={styles.logoGrayComponent}
     src={evLogoGray.src}
     style={override}
   /> 
  );
};
