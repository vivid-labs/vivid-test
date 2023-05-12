import styles from "./StatusIndicator.module.css";

export const StatusIndicator = ({ status }: { status: string }) => {
  const status_0 = {
    Implemented: {
      backgroundColor: "rgb(60, 157, 93)",
    },
    New: {
      backgroundColor: "rgb(0, 129, 225)",
    },
    Local: {
      backgroundColor: "rgb(222, 136, 88)",
    },
  }[status];

  return (
    <div className={styles.statusIndicator0}>
      <div className={styles.statusIndicator1}>
        <div style={status_0} className={styles.statusIndicator2} />
      </div>
    </div>
  );
};
