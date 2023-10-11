import { Vector } from "./Vector";
import styled from "styled-components";
const Text = styled.p`
  color: rgb(23, 23, 23);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.03px;
  line-height: 19px;
`;
const SidebarTabComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 6px 12px;
  height: 28px;
`;
export const SidebarTab = ({
  override,
  status,
  icon,
  text,
}: {
  override?: React.CSSProperties;
  status: string;
  icon: React.ReactNode;
  text: string;
}) => {
  const sidebarTabStatus =
    status === "Unselected"
      ? {}
      : {
          backgroundColor: "rgb(237, 237, 237)",
        };
  return (
    <SidebarTabComponent
      style={{
        ...sidebarTabStatus,
        ...override,
      }}
    >
      {icon}
      <Text>{text}</Text>
    </SidebarTabComponent>
  );
};
