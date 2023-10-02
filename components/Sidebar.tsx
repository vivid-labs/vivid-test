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
import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const MailIcon = styled.div`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  width: 38px;
  height: 38px;
`;

const SkiffMail = styled.p`
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 300;
  line-height: 19.5px;
`;

const AryamanSWorkspace = styled.p`
  color: rgba(255, 255, 255, 0.54);
  font-size: 13px;
  font-weight: 300;
  line-height: 16.9px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: fit-content;
`;

const Workspace = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  height: fit-content;
  padding: 10px;
  width: 100%;
`;

const OverallOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 0px 0px 13px;
  width: 100%;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.04);
  border-bottom-width: 1px;
`;

const MailTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  height: fit-content;
  padding: 0px 0px 12px;
  width: 239px;
`;

const MailOptions = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 140px;
  width: 100%;
  height: 598px;
`;

const ShareOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
`;

const SidebarComponent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 1px 0px 0px;
  width: 100%;
  height: 902px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.04);
  border-right-width: 1px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));
  font-family: Roboto;
`;

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
    <SidebarComponent style={override}>
      <Workspace />
      <OverallOptions>
        {sidebarTabProps.map((props, i) => (
          <SidebarTab {...props} key={i} />
        ))}
      </OverallOptions>
      <MailOptions sidebarTabProps1={sidebarTabProps1} />
      <ShareOptions>
        {sidebarTabProps2.map((props, i) => (
          <SidebarTab {...props} key={i} />
        ))}
      </ShareOptions>
    </SidebarComponent>
  );
};

const Workspace = () => (
  <Workspace>
    <MailIcon>
      <Image src={mailIcon.src} />
    </MailIcon>
    <Text>
      <SkiffMail>Skiff Mail</SkiffMail>
      <AryamanSWorkspace>aryaman&amp;#39;s workspace</AryamanSWorkspace>
    </Text>
  </Workspace>
);

const MailOptions = ({ sidebarTabProps1 }: any) => (
  <MailOptions>
    <Header headerText="MAIL" />
    <MailTabs>
      {sidebarTabProps1.map((props, i) => (
        <SidebarTab {...props} key={i} />
      ))}
    </MailTabs>
    <Header headerText="ALIASES" />
    <SidebarTab status="Inactive" icon={<At />} label="aryaman@skiff.com" />
    <Header headerText="FOLDERS" />
    <Header headerText="LABELS" />
  </MailOptions>
);
