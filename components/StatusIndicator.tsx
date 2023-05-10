import styles from "./StatusIndicator.module.css";

export const StatusIndicator = ({ status }: { status: string }) => {
  const status_0 = {
    Implemented: "rgb(60, 157, 93)",
    New: "rgb(0, 129, 225)",
    Local: "rgb(222, 136, 88)",
  }[status];

  return (
    <div className={styles.statusIndicator0}>
      <div className={styles.statusIndicator1}>
        <div
          style={{
            backgroundColor: status_0,
          }}
          className={styles.statusIndicator2}
        />
      </div>
    </div>
  );
};
