import styles from "./ComponentCard.module.css";
import { DragHandle } from "./DragHandle";
import { Delete } from "./Delete";
export const ComponentCard = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.componentCard}>
      <div className={styles.imageFrame}>
        <DragHandle
          override={{
            borderWidth: "1px",
            position: "relative",
            height: "5px",
            width: "8px",
            borderColor: "rgb(0, 0, 0)",
          }}
        />
        <Delete
          override={{
            height: "55px",
            width: "80px",
          }}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.card}>Card</p>
      </div>
    </div>
  );
};
