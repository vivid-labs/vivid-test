import styles from "./Program.module.css";
import group_10 from "./group_10.svg";
export const Program = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.programComponent} style={override}>
      <div>
        <img className={styles.group_10} src={group_10.src} />
      </div>
    </div>
  );
};
