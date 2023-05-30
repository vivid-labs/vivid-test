import styles from "./BtnSupport.module.css";
import { TextHovering } from "./TextHovering";

export const BtnSupport = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "btn hover":
      return (
        <div style={style} className={styles.btnSupport0}>
          <TextHovering property_1="hover" style={{}} />
          <div className={styles.btnSupport1} />
        </div>
      );
    case "btn default":
      return (
        <div style={style} className={styles.btnSupport2}>
          <TextHovering property_1="default" style={{}} />
          <div className={styles.btnSupport3} />
        </div>
      );
  }
};
