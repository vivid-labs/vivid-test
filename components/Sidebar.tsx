import styles from "./Sidebar.module.css";
import { IssuesIcon } from "./IssuesIcon";
import { LibraryIcon } from "./LibraryIcon";

export const Sidebar = ({ active }: { active: string }) => {
  const active_0 =
    active === "Issues"
      ? {
          backgroundColor: "rgb(39, 39, 42)",
        }
      : {};
  const active_1 =
    active === "Issues"
      ? {}
      : {
          backgroundColor: "rgb(39, 39, 42)",
        };

  return (
    <div className={styles.sidebar0}>
      <div style={active_0} className={styles.sidebar1}>
        <IssuesIcon />
      </div>
      <div style={active_1} className={styles.sidebar2}>
        <LibraryIcon />
      </div>
    </div>
  );
};
