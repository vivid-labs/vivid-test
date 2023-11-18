import styles from "./Send.module.css";
import send from "./send.svg";
export const Send = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className={styles.sendComponent} src={send.src} style={override} />
  );
};
