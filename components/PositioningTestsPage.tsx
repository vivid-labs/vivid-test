import styles from "./PositioningTestsPage.module.css";
import { PaddingComponent } from "./PaddingComponent";
import { XButtonMediumFixed } from "./XButtonMediumFixed";
import { TestButton } from "./TestButton";

export const PositioningTestsPage = () => {
  return (
    <div className={styles.positioningTestsPage0}>
      <PaddingComponent />
      <XButtonMediumFixed />
      <TestButton />
    </div>
  );
};
