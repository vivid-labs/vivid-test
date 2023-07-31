import styles from "./Tooltip.module.css";
export const Tooltip = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.tooltip}>
      <p className={styles.addToLibrary}>Add to library</p>
    </div>
  );
};
