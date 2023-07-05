import styles from "./ColorseqFigmaSizeeqSmall.module.css";
import { DragHandle } from "./DragHandle";
import { Delete } from "./Delete";
export const ColorseqFigmaSizeeqSmall = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.colorseqFigmaSizeeqSmall}>
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
      <div className={styles.text}>
        <p className={styles.card}>Card</p>
      </div>
    </div>
  );
};
