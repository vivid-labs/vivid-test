import styles from "./LabelledInput.module.css";
import line_2 from "./line_2.svg";
import line_1 from "./line_1.svg";
import line from "./line.svg";

export const LabelledInput = ({
  style,
  lineSize,
}: {
  style?: any;
  lineSize: string;
}) => {
  const lineLineSize = {
    Small: {
      width: "27px",
      left: "38.5px",
      top: "-1.5px",
    },
    Medium: {
      width: "48px",
      left: "60px",
      top: "-1px",
    },
    Large: {
      width: "70px",
      left: "81px",
      top: "-1px",
    },
  }[lineSize];
  let lineSrc;
  if (lineSize === "Small") {
    lineSrc = line_2;
  } else if (lineSize === "Medium") {
    lineSrc = line_1;
  } else {
    lineSrc = line;
  }

  return (
    <div style={style} className={styles.labelledInput}>
      <img src={lineSrc.src} style={lineLineSize} className={styles.line} />
      <p className={styles.placeholder}>placeholder</p>
      <p className={styles.label}>Label</p>
    </div>
  );
};
