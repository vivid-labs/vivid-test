import styles from "./Draft.module.css";
import draft from "./draft.svg";
export const Draft = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className={styles.draftComponent} src={draft.src} style={override} />
  );
};
