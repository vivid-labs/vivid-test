import styles from "./LabelledInput.module.css";
import vivid_9e75b58616ba from "./9e75b58616ba.svg";
import vivid_7a873c84aecb from "./7a873c84aecb.svg";
import vivid_0d71c74c9578 from "./0d71c74c9578.svg";

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
    lineSrc = vivid_9e75b58616ba;
  } else if (lineSize === "Medium") {
    lineSrc = vivid_7a873c84aecb;
  } else {
    lineSrc = vivid_0d71c74c9578;
  }

  return (
    <div style={style} className={styles.labelledInput}>
      <img src={lineSrc.src} style={lineLineSize} className={styles.line} />
      <p className={styles.placeholder}>placeholder</p>
      <p className={styles.label}>Label</p>
    </div>
  );
};
