import styles from "./CheckMark.module.css";
import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.checkMark} figma-id="29:532">
      <img src={group.src} className={styles.group} figma-id="12:97" />
    </div>
  );
};
