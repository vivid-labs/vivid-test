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
      <div
        style={override}
        className={styles.componentCardComponent2}
        figma-id="3:12:30"
      >
        <div className={styles.imageFrameDiv2} figma-id="3:31:4130">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "relative",
                borderColor: "rgb(0, 0, 0)",
              }}
              figma-id="3:801:524"
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.textDiv2} figma-id="3:13:29">
          <p className={styles.cardText2} figma-id="3:13:60">
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Small") {
    return (
      <div
        style={override}
        className={styles.componentCardComponent1}
        figma-id="3:36:1218"
      >
        <div className={styles.imageFrameDiv1} figma-id="3:36:1220">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
              figma-id="3:801:552"
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.textDiv1} figma-id="3:36:1222">
          <p className={styles.cardText1} figma-id="3:36:1223">
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Figma" && size === "Large") {
    return (
      <div
        style={override}
        className={styles.componentCardComponent}
        figma-id="3:38:1829"
      >
        <div className={styles.imageFrameDiv} figma-id="3:38:1831">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
              figma-id="3:801:2295"
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.textDiv} figma-id="3:38:1833">
          <p className={styles.cardText} figma-id="3:38:1834">
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Large") {
    return (
      <div
        style={override}
        className={styles.componentCard}
        figma-id="3:38:1836"
      >
        <div className={styles.imageFrame} figma-id="3:38:1838">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
              figma-id="3:801:2316"
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className={styles.text} figma-id="3:38:1840">
          <p className={styles.card} figma-id="3:38:1841">
            {text}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
