import styles from "./EnvelopeSimple.module.css";
import envelopeSimple from "./envelopeSimple.svg";

export const EnvelopeSimple = ({ style }: { style?: any }) => {
  return (
    <img
      src={envelopeSimple.src}
      style={style}
      className={styles.envelopeSimple}
    />
  );
};
