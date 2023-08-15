import styles from "./Tooltip.module.css";
import { Doc } from "./Doc";
export const Tooltip = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.tooltipHeader} style={override}>
    <Doc text="Q1 Sales Report" />
    <Doc text="Marketing All-Hands" />
    <Doc text="Monthly Revenues" />
    <div className={styles.tooltipTitle}>
      <p className={styles.tooltipComponent}>Sourced Documents</p>
    </div>
   </div> 
  );
};
