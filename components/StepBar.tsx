import styles from "./StepBar.module.css";
import { Step } from "./Step";
import { DashedSeparator } from "./DashedSeparator";
export const StepBar = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.stepBarComponent} style={override}>
      <Step status="Done" number="1" text="Assign" />
      <DashedSeparator />
      <Step status="Active" number="2" text="Review" />
      <DashedSeparator />
      <Step status="To Do" number="3" text="Remove & Upload Evidence" />
      <DashedSeparator />
      <Step status="To Do" number="4" text="Done" />
    </div>
  );
};
