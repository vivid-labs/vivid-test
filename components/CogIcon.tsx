import styles from "./CogIcon.module.css";
import cogIcon from "./cogIcon.svg";
export const CogIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
      className={styles.cogIconComponent}
      src={cogIcon.src}
      style={override}
    />
  );
};
