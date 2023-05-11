import styles from "./ComponentCard.module.css";
import { DragHandle } from "./DragHandle";
import { PlaceholderImage } from "./PlaceholderImage";

export const ComponentCard = ({
  colors,
  size,
  draggable,
  text,
}: {
  colors: string;
  size: string;
  draggable: boolean;
  text: string;
}) => {
  const colors_0 =
    colors === "Figma"
      ? {
          borderColor: "rgb(68, 68, 68)",
          backgroundColor: "rgb(68, 68, 68)",
        }
      : {
          borderColor: "rgb(63, 63, 70)",
          backgroundColor: "rgb(63, 63, 70)",
        };
  const colors_1 =
    colors === "Figma"
      ? {
          backgroundColor: "rgb(30, 30, 30)",
        }
      : {
          backgroundColor: "rgb(24, 24, 27)",
        };
  const colors_2 =
    colors === "Figma"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(250, 250, 250)",
        };
  const size_0 =
    size === "Small"
      ? {
          height: "75px",
        }
      : {
          height: "88px",
        };

  return (
    <div style={hello} className={styles.componentCard0}>
      <div style={hello} className={styles.componentCard1}>
        {draggable ? <DragHandle /> : null}
        <PlaceholderImage />
      </div>
      <div style={hello} className={styles.componentCard2}>
        <p style={hello} className={styles.componentCard3}>
          {text}
        </p>
      </div>
    </div>
  );
};
