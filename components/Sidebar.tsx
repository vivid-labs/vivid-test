import styles from "./Sidebar.module.css";
import mailIcon from "./mailIcon.png";
import { SidebarTab } from "./SidebarTab";
import { Compose } from "./Compose";
import { Search } from "./Search";
import { Settings } from "./Settings";
import { Header } from "./Header";
import { InboxIcon } from "./InboxIcon";
import { Send } from "./Send";
import { Calendar } from "./Calendar";
import { Draft } from "./Draft";
import { Import } from "./Import";
import { Spam } from "./Spam";
import { Archive } from "./Archive";
import { Trash } from "./Trash";
import { At } from "./At";
import { Contacts } from "./Contacts";
import { Invite } from "./Invite";
import { SendFeedback } from "./SendFeedback";
export const Sidebar = ({ override }: { override?: React.CSSProperties }) => {
  const sidebarTabProps = [
    {
      status: "Highlighted",
      icon: <Compose />,
      label: "Compose",
    },
    {
      status: "Inactive",
      icon: <Search />,
      label: "Search",
    },
    {
      status: "Inactive",
      icon: <Settings />,
      label: "Settings",
    },
  ];
  const sidebarTabProps1 = [
    {
      status: "Selected",
      icon: <InboxIcon />,
      label: "Inbox",
      override: {
        height: "fit-content",
        width: "239px",
      },
    },
    {
      status: "Inactive",
      icon: <Send />,
      label: "Sent",
    },
    {
      status: "Inactive",
      icon: <Calendar />,
      label: "Send later",
    },
    {
      status: "Inactive",
      icon: <Draft />,
      label: "Drafts",
    },
    {
      status: "Inactive",
      icon: <Import />,
      label: "Imports",
    },
    {
      status: "Inactive",
      icon: <Spam />,
      label: "Spam",
    },
    {
      status: "Inactive",
      icon: <Archive />,
      label: "Archive",
    },
    {
      status: "Inactive",
      icon: <Trash />,
      label: "Trash",
    },
  ];
  const sidebarTabProps2 = [
    {
      status: "Inactive",
      icon: <Contacts />,
      label: "Contacts",
    },
    {
      status: "Inactive",
      icon: <Invite />,
      label: "Invite",
    },
    {
      status: "Inactive",
      icon: <SendFeedback />,
      label: "Send feedback",
    },
  ];
  return (
    <div className={styles.sidebarComponentClass} style={override}>
    <div className={styles.workspaceClass}>
      <div className={styles.mailIconClass}>
        <img className={styles.imageClass} src={mailIcon.src} />
      </div>
      <div className={styles.textClass}>
        <p className={styles.skiffMailClass}>Skiff Mail</p>
        <p className={styles.aryamanWorkspaceClass}>
          aryaman&amp;#39;s workspace
        </p>
      </div>
    </div>
    <div className={styles.overallOptionsClass}>
      {sidebarTabProps.map((props, i) => (
        <SidebarTab {...props} key={i} />
      ))}
    </div>
    <div className={styles.mailOptionsClass}>
      <Header headerText="MAIL" />
      <div className={styles.mailTabsClass}>
        {sidebarTabProps1.map((props, i) => (
          <SidebarTab {...props} key={i} />
        ))}
      </div>
      <Header headerText="ALIASES" />
      <SidebarTab status="Inactive" icon={<At />} label="aryaman@skiff.com" />
      <Header headerText="FOLDERS" />
      <Header headerText="LABELS" />
    </div>
    <div className={styles.shareOptionsClass}>
      {sidebarTabProps2.map((props, i) => (
        <SidebarTab {...props} key={i} />
      ))}
    </div>
   </div> 
  );
};
