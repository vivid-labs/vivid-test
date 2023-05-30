import styles from "./XButtonActionsLabelFixedSecondary.module.css";
import { ArrowHeader } from "./ArrowHeader";

export const XButtonActionsLabelFixedSecondary = ({
  style,
}: {
  style: any;
}) => {
  return (
    <div style={style} className={styles.xButtonActionsLabelFixedSecondary0}>
      <div className={styles.xButtonActionsLabelFixedSecondary1}>
        <div className={styles.xButtonActionsLabelFixedSecondary2}>
          <div className={styles.xButtonActionsLabelFixedSecondary3} />
          <p className={styles.xButtonActionsLabelFixedSecondary4}>
            Button fixed
          </p>
          <div className={styles.xButtonActionsLabelFixedSecondary5} />
        </div>
        <ArrowHeader
          style={{
            height: "4px",
            width: "8px",
          }}
        />
      </div>
    </div>
  );
};
