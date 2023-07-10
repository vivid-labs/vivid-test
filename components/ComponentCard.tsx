import styles from "./ComponentCard.module.css";
import { DragHandle } from "./DragHandle";
import { Delete } from "./Delete";
export const ComponentCard = ({
  override,
  colors,
  size,
  draggable,
  instance,
  text,
}: {
  override?: any;
  colors: string;
  size: string;
  draggable: boolean;
  instance: any;
  text: string;
}) => {
  if (colors === "Figma" && size === "Small") {
    return (
      <div style={override} className={styles.componentCardComponent2}>
      <div className={styles.componentCardImageFrameDiv2}>
        {draggable ? (
          <DragHandle
            override={{
              borderWidth: "1px",
              position: "relative",
              borderColor: "rgb(0, 0, 0)",
            }}
          />
        ) : null}
        {draggable ? instance : null}
      </div>
      <div className={styles.componentCardTextDiv2}>
        <p className={styles.componentCardTextContent2}>{text}</p>
      </div>
     </div>)
    );
  } else if (colors === "Zinc" && size === "Small") {
    return (
     (<div style={override} className={styles.componentCardComponent1}>
      <div className={styles.componentCardImageFrameDiv1}>
        {draggable ? (
          <DragHandle
            override={{
              borderWidth: "1px",
              position: "absolute",
              borderColor: "rgb(0, 0, 0)",
            }}
          />
        ) : null}
        {draggable ? instance : null}
      </div>
      <div className={styles.componentCardTextDiv1}>
        <p className={styles.componentCardTextContent1}>{text}</p>
      </div>
     </div>)
    );
  } else if (colors === "Figma" && size === "Large") {
    return (
     (<div style={override} className={styles.componentCardComponent}>
      <div className={styles.componentCardImageFrameDiv}>
        {draggable ? (
          <DragHandle
            override={{
              borderWidth: "1px",
              position: "absolute",
              borderColor: "rgb(0, 0, 0)",
            }}
          />
        ) : null}
        {draggable ? instance : null}
      </div>
      <div className={styles.componentCardTextDiv}>
        <p className={styles.componentCardTextContent2}>{text}</p>
      </div>
     </div>)
    );
  } else if (colors === "Zinc" && size === "Large") {
    return (
     (<div style={override} className={styles.componentCard}>
      <div className={styles.componentCardImageFrame}>
        {draggable ? (
          <DragHandle
            override={{
              borderWidth: "1px",
              position: "absolute",
              borderColor: "rgb(0, 0, 0)",
            }}
          />
        ) : null}
        {draggable ? instance : null}
      </div>
      <div className={styles.componentCardText}>
        <p className={styles.componentCardTextContent}>{text}</p>
      </div>
     </div> 
    );
  } else {
    return null;
  }
};
