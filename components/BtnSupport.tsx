import styles from "./BtnSupport.module.css";
import { TextHovering } from "./TextHovering";

export const BtnSupport = ({ property_1 }: { property_1: string }) => {
  switch (property_1) {
    case "btn hover":
      return (
        <div className={styles.btnSupport0}>
          <TextHovering property_1="hover" />
          <div className={styles.btnSupport1} />
        </div>
      );
    case "btn default":
      return (
        <div className={styles.btnSupport2}>
          <TextHovering property_1="default" />
          <div className={styles.btnSupport3} />
        </div>
      );
  }
};
