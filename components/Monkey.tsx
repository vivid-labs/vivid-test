import styles from "./Monkey.module.css";
import monkey from "./monkey.png";
export const Monkey = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className={styles.monkeyComponent}
      figma-id="7:1535:3552"
    >
      <img src={monkey.src} className={styles.monkey} figma-id="7:1535:3549" />
    </div>
  );
};
