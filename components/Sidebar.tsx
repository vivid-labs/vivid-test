import "./Sidebar.module.css";
import { IssuesIcon } from "./IssuesIcon";
import vivid_1696ddce7ddf from "./1696ddce7ddf.svg";
import vivid_44fab17becf9 from "./44fab17becf9.svg";

export const Sidebar = ({ active }: { active: string }) => {
  return (
    <div className="sidebar-0">
      <div className="sidebar-1">
        <IssuesIcon />
      </div>
      <img src={vivid_1696ddce7ddf.src} className="sidebar-2" />
    </div>
  );
};
