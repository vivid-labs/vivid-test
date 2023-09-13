import styles from "./CheckIcon.module.css";
import checkIcon from "./checkIcon.svg";
export const CheckIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
      className={styles.checkIconComponent}
      src={checkIcon.src}
      style={override}
    />
  );
};
