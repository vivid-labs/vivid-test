import styles from "./SidebarTab.module.css";
import { InboxIcon } from "./InboxIcon";
export const SidebarTab = ({
  override,
  status,
  icon,
  label,
}: {
  override?: React.CSSProperties;
  status: string;
  icon: React.ReactNode;
  label: string;
}) => {
  const inboxStatus = {
    Selected: {
      color: "rgb(255, 255, 255)",
    },
    Inactive: {
      color: "rgb(149, 149, 149)",
    },
    Highlighted: {
      color: "rgb(255, 255, 255)",
    },
  }[status];
  const contentStatus = {
    Selected: {
      backgroundColor: "rgb(41, 41, 41)",
    },
    Inactive: {
      backgroundColor: "rgb(25, 25, 25)",
    },
    Highlighted: {
      borderStyle: "solid",
      borderColor: "rgb(51, 51, 51)",
      borderWidth: "1px",
      backgroundColor: "rgb(41, 41, 41)",
    },
  }[status];
  const sidebarTabStatus = {
    Selected: {
      justifyContent: "center",
    },
    Inactive: {
      justifyContent: "flex-start",
    },
    Highlighted: {
      justifyContent: "flex-start",
    },
  }[status];
  return (
    <div
      className={styles.sidebarTabComponent}
      style={{
        ...sidebarTabStatus,
        ...override,
      }}
    >
      <div
        className={styles.content}
        style={{
          ...contentStatus,
        }}
      >
        {icon}
        <p
          className={styles.inbox}
          style={{
            ...inboxStatus,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
