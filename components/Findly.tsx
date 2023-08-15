import styles from "./Findly.module.css";
import findlyScreenshot from "./findlyScreenshot.jpg";
import { DocButton } from "./DocButton";
import { Tooltip } from "./Tooltip";
export const Findly = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.overlay} style={override}>
    <img className={styles.findlyComponent} src={findlyScreenshot.src} />
    <div className={styles.findlyScreenshot}>
      <DocButton
        override={{
          borderWidth: "1px",
          borderColor: "rgb(96, 107, 119)",
          backgroundColor: "rgb(43, 54, 66)",
          position: "absolute",
          top: "374px",
          left: "378px",
        }}
      />
      <Tooltip
        override={{
          borderWidth: "1px",
          borderColor: "rgb(96, 107, 119)",
          position: "absolute",
          backgroundColor: "rgb(28, 41, 54)",
          top: "374px",
          left: "419px",
        }}
      />
    </div>
   </div> 
  );
};
