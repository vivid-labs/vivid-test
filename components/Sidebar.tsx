import styles from "./Sidebar.module.css";
import { IssuesIcon } from "./components";
import { LibraryIcon } from "./components";
export const Sidebar = ({
  override,
  active,
}: {
  override?: any;
  active: string;
}) => {
  const sidebarButtonActive =
    active === "Issues"
      ? {
          backgroundColor: "rgb(39, 39, 42)",
        }
      : {};
  const sidebarButtonDivActive =
    active === "Issues"
      ? {}
      : {
          backgroundColor: "rgb(39, 39, 42)",
        };
  return (
    <div style={override} className={styles.sidebar} figma-id="7:37:2336">
      <div
        style={sidebarButtonActive}
        className={styles.sidebarButton}
        figma-id="7:799:1626"
      >
        <IssuesIcon figma-id="7:801:2339" />
      </div>
      <div
        style={sidebarButtonDivActive}
        className={styles.sidebarButtonDiv}
        figma-id="7:799:1646"
      >
        <LibraryIcon figma-id="7:801:2342" />
      </div>
    </div>
  );
};
