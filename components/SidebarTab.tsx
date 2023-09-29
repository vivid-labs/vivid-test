import { InboxIcon } from "./InboxIcon";
import styled from "styled-components";
const Inbox = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 19.5px;
`;
const DivScIJkotd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  border-radius: 4px;
`;
const SpanScGsDkaq = styled.div`
  display: flex;
  align-items: flex-start;
  height: fit-content;
  padding: 0px 122px 0px 0px;
  width: 100%;
`;
const DivSc_1c037cc4_4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  flex: 1 1 0%;
  min-width: 0px;
`;
const DivSc_1c037cc4_1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  const divSc_1c037cc4_1Status = {
    Selected: {
      backgroundColor: "rgba(255, 255, 255, 0.04)",
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
  return (
    <SidebarTabComponent style={override}>
      <DivSc_1c037cc4_1
        style={{
          ...divSc_1c037cc4_1Status,
        }}
      >
        <DivSc_1c037cc4_4>
          <SpanScGsDkaq>
            <DivScIJkotd>
              {icon}
              <Inbox
                style={{
                  ...inboxStatus,
                }}
              >
                {label}
              </Inbox>
            </DivScIJkotd>
          </SpanScGsDkaq>
        </DivSc_1c037cc4_4>
      </DivSc_1c037cc4_1>
    </SidebarTabComponent>
  );
};
