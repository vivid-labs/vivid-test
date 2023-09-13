import styles from "./Checkbox.module.css";
export const Checkbox = ({ override }: { override?: React.CSSProperties }) => {
  return <div className={styles.checkboxComponent} style={override} />;
};
