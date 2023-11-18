import { SidebarTab } from "./SidebarTab";
import { Vector } from "./Vector";
import styled from "styled-components";
export const SidebarTabPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <SidebarTab
      status="Unselected"
      text="Settings & members"
      icon={<Vector />}
      override={{
        width: "100%",
      }}
    />
  );
};
