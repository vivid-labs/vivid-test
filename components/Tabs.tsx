import styles from "./Tabs.module.css";

export const Tabs = ({ activeTab }: { activeTab: string }) => {
  const activeTab_0 =
    activeTab === "First" ? "rgb(255, 255, 255)" : "rgb(160, 160, 160)";
  const activeTab_1 =
    activeTab === "First" ? "rgb(160, 160, 160)" : "rgb(255, 255, 255)";

  return (
    <div className={styles.tabs0}>
      <p
        style={{
          color: activeTab_0,
        }}
        className={styles.tabs1}
      >
        Library
      </p>
      <p
        style={{
          color: activeTab_1,
        }}
        className={styles.tabs2}
      >
        This Page
      </p>
    </div>
  );
};
