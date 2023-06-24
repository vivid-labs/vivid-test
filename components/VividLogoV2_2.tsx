import styles from "./VividLogoV2_2.module.css";
import vividLogoV2_2 from "./vividLogoV2_2.png";

export const VividLogoV2_2 = ({ override }: { override?: any }) => {
  return (
    <img
      style={override}
      src={vividLogoV2_2.src}
      className={styles.vividLogoV2_2}
    />
  );
};
