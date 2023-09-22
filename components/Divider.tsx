import styles from "./Divider.module.css";
export const Divider = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.dividerComponent} style={override}>
      <div className={styles.dividerDiv} />
    </div>
  );
};
