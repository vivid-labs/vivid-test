import styles from "./Tooltip.module.css";
export const Tooltip = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.tooltipClass}>
    <p className={styles.addToLibraryClass}>Add to library</p>
   </div> 
  );
};
