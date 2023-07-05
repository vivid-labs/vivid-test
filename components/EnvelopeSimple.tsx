import styles from "./EnvelopeSimple.module.css";
import envelopeSimple from "./envelopeSimple.svg";
export const EnvelopeSimple = ({ override }: { override?: any }) => {
  return (
    <img
     src={envelopeSimple.src}
     style={override}
     className={styles.envelopeContainer}
   /> 
  );
};
