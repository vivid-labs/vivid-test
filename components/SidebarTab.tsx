import { InboxIcon } from "./InboxIcon";
import styled from "styled-components";
const Inbox = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 19.5px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 5px 2px 9px;
  border-radius: 6px;
  width: 100%;
  height: 32px;
`;
const SidebarTabComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 0px 6px;
  width: 239px;
`;
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
    <SidebarTabComponent
      style={{
        ...sidebarTabStatus,
        ...override,
      }}
    >
      <Content
        style={{
          ...contentStatus,
        }}
      >
        {icon}
        <Inbox
          style={{
            ...inboxStatus,
          }}
        >
          {label}
        </Inbox>
      </Content>
    </SidebarTabComponent>
  );
};
