import { Step } from "./Step";
import { DashedSeparator } from "./DashedSeparator";
import styled from "styled-components";
const StepBarComponent = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 4px;
  height: fit-content;
  padding: 12px 10px;
  border-radius: 8px;
  width: 100%;
  border-style: solid;
  border-color: rgb(225, 226, 230);
  border-width: 1px;
  background-color: rgb(255, 255, 255);
  font-family: Helvetica Neue;
`;
export const StepBar = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <StepBarComponent style={override}>
      <Step status="Done" number="1" text="Assign" />
      <DashedSeparator />
      <Step status="Active" number="2" text="Review" />
      <DashedSeparator />
      <Step status="To Do" number="3" text="Remove & Upload Evidence" />
      <DashedSeparator />
      <Step status="To Do" number="4" text="Done" />
    </StepBarComponent>
  );
};
