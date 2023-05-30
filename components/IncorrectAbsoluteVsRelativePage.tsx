import styles from "./IncorrectAbsoluteVsRelativePage.module.css";
import { XLeftMenuRow } from "./XLeftMenuRow";

export const IncorrectAbsoluteVsRelativePage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.incorrectAbsoluteVsRelativePage0}>
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
    </div>
  );
};
