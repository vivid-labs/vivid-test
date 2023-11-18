import { SidebarTab } from "./SidebarTab";
import { InboxIcon } from "./InboxIcon";
import styled from "styled-components";
export const SidebarTabPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <SidebarTab
      status="Selected"
      icon={<InboxIcon />}
      label="Inbox"
      override={{
        width: "100%",
      }}
    />
  );
};
