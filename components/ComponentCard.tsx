import styles from "./ComponentCard.module.css";
import { DragHandle } from "./DragHandle";
import { PlaceholderImage } from "./PlaceholderImage";

export const ComponentCard = ({
  style,
  colors,
  size,
  draggable,
  instance,
  text,
}: {
  style?: any;
  colors: string;
  size: string;
  draggable: boolean;
  instance: any;
  text: string;
}) => {
  if (colors === "Figma" && size === "Small") {
    return (
      <div style={style} className={styles.componentCardComponent2}>
        <div className={styles.imageFrameDiv2}>
          {draggable ? (
            <DragHandle
              style={{
                borderWidth: "1px",
                position: "relative",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.textDiv2}>
          <p className={styles.cardText2}>{text}</p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Small") {
    return (
      <div style={style} className={styles.componentCardComponent1}>
        <div className={styles.imageFrameDiv1}>
          {draggable ? (
            <DragHandle
              style={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.textDiv1}>
          <p className={styles.cardText1}>{text}</p>
        </div>
      </div>
    );
  } else if (colors === "Figma" && size === "Large") {
    return (
      <div style={style} className={styles.componentCardComponent}>
        <div className={styles.imageFrameDiv}>
          {draggable ? (
            <DragHandle
              style={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.textDiv}>
          <p className={styles.cardText}>{text}</p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Large") {
    return (
      <div style={style} className={styles.componentCard}>
        <div className={styles.imageFrame}>
          {draggable ? (
            <DragHandle
              style={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.text}>
          <p className={styles.card}>{text}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
