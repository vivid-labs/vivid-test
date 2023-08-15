import styles from "./Tooltip.module.css";
import { Doc } from "./Doc";
export const Tooltip = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.tooltipComponent} style={override}>
      <Doc text="Q1 Sales Report" />
      <Doc text="Marketing All-Hands" />
      <Doc text="Monthly Revenues" />
      <div className={styles.header}>
        <p className={styles.title}>Sourced Documents</p>
      </div>
    </div>
  );
};
