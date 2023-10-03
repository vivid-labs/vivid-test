import { CheckIcon } from "./CheckIcon";
import styled from "styled-components";
const StepText = styled.p`
  color: rgb(123, 129, 138);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.1px;
`;
const StepComponent = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: fit-content;
  height: fit-content;
`;
const Text1 = styled.p`
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 300;
  letter-spacing: -0.1px;
`;
const StepIcon = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    90deg,
    rgb(217, 52, 118) 0%,
    rgb(229, 127, 57) 100%
  );
`;
const StepText1 = styled.p`
  color: rgb(80, 86, 98);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.1px;
`;
const StepComponent1 = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: fit-content;
  height: fit-content;
`;
const Text1Text = styled.p`
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 300;
  letter-spacing: -0.1px;
`;
const StepIconDiv = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 20px;
  height: 20px;
  background-color: rgb(225, 226, 230);
`;
const StepText2 = styled.p`
  color: rgb(123, 129, 138);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.1px;
`;
const StepComponent2 = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: fit-content;
  height: fit-content;
`;
export const Step = ({
  override,
  status,
  text,
  number,
}: {
  override?: React.CSSProperties;
  status: string;
  text: string;
  number: string;
}) => {
  switch (status) {
    case "Done":
      return (
        <StepComponent style={override}>
          <CheckIcon />
          <StepText>{text}</StepText>
        </StepComponent>
      );
    case "Active":
      return (
        <StepComponent1 style={override}>
          <StepIcon>
            <Text1>{number}</Text1>
          </StepIcon>
          <StepText1>{text}</StepText1>
        </StepComponent1>
      );
    case "To Do":
      return (
        <StepComponent2 style={override}>
          <StepIconDiv>
            <Text1Text>{number}</Text1Text>
          </StepIconDiv>
          <StepText2>{text}</StepText2>
        </StepComponent2>
      );
    default:
      return null;
  }
};
