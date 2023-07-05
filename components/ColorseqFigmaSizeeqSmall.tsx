import styles from "./ColorseqFigmaSizeeqSmall.module.css";
import { DragHandle } from "./DragHandle";
import { Delete } from "./Delete";
export const ColorseqFigmaSizeeqSmall = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.colorSequenceFigureSmall}>
    <div className={styles.imageFrame}>
      <DragHandle
        override={{
          borderWidth: "1px",
          position: "relative",
          borderColor: "rgb(0, 0, 0)",
        }}
      />
      <Delete />
    </div>
    <div className={styles.textContainer}>
      <p className={styles.cardTitle}>Card</p>
    </div>
   </div> 
  );
};
