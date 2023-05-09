import styles from "./StatusIndicator.module.css";

export const StatusIndicator = ({ status }: { status: string }) => {
  const status_0 = {
    Implemented: "20px",
    New: "85px",
    Local: "150px",
  }[status];

  return (
    <div
      style={{
        left: status_0,
      }}
      className={styles.statusIndicator0}
    >
      <div className={styles.statusIndicator1}>
        <div className={styles.statusIndicator2} />
      </div>
    </div>
  );
};
