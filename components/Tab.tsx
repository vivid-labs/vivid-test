import styles from "./Tab.module.css";
export const Tab = ({
  override,
  status,
  text,
}: {
  override?: React.CSSProperties;
  status: string;
  text: string;
}) => {
  const assignedToMe_15Status =
    status === "Active"
      ? {
          color: "rgb(3, 3, 3)",
        }
      : {
          color: "rgb(80, 86, 98)",
        };
  return (
    <div className={styles.tabComponent} style={override}>
      <p
        className={styles.assignedToMe_15}
        style={{
          ...assignedToMe_15Status,
        }}
      >
        {text}
      </p>
    </div>
  );
};
