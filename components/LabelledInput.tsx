import styles from "./LabelledInput.module.css";
import vivid_9e75b58616ba from "./9e75b58616ba.svg";
import vivid_7a873c84aecb from "./7a873c84aecb.svg";
import vivid_0d71c74c9578 from "./0d71c74c9578.svg";

export const LabelledInput = ({
  style,
  lineSize,
}: {
  style: any;
  lineSize: string;
}) => {
  const lineSize_0 = {
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
  let imageSrc_0;
  if (lineSize === "Small") {
    imageSrc_0 = vivid_9e75b58616ba;
  } else if (lineSize === "Medium") {
    imageSrc_0 = vivid_7a873c84aecb;
  } else {
    imageSrc_0 = vivid_0d71c74c9578;
  }

  return (
    <div style={style} className={styles.labelledInput0}>
      <div className={styles.labelledInput1} />
      <img
        src={imageSrc_0.src}
        style={lineSize_0}
        className={styles.labelledInput1}
      />
      <p className={styles.labelledInput1}>placeholder</p>
      <p className={styles.labelledInput1}>Label</p>
    </div>
  );
};
