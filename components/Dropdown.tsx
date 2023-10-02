import { Arrow } from "./Arrow";
import { Option } from "./Option";
import { Divider } from "./Divider";
import styled from "styled-components";
const Select = styled.p`
  color: rgb(70, 70, 70);
  font-size: 12px;
  font-weight: 400;
`;
const DropdownComponent = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-radius: 6px;
  position: relative;
  width: 160px;
  height: 28px;
  border-style: solid;
  border-color: rgb(212, 212, 212);
  border-width: 1px;
  background-color: rgb(251, 251, 251);
`;
const SelectText = styled.p`
  color: rgb(70, 70, 70);
  font-size: 12px;
  font-weight: 400;
`;
const Bar = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-radius: 6px;
  position: relative;
  width: 160px;
  height: 28px;
  border-style: solid;
  border-color: rgb(212, 212, 212);
  border-width: 1px;
  background-color: rgb(246, 246, 246);
`;
const Content = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  border-radius: 6px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  border-style: solid;
  border-color: rgb(226, 226, 226);
  border-width: 1px;
  background-color: rgb(255, 255, 255);
`;
const DropdownComponent1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  height: fit-content;
  width: fit-content;
  border-radius: 6px;
`;
export const Dropdown = ({
  override,
  status,
  text,
}: {
  override?: React.CSSProperties;
  status: string;
  text: string;
}) => {
  switch (status) {
    case "Idle":
      return (
        <DropdownComponent style={override}>
          <Select>{text}</Select>
          <Arrow
            override={{
              position: "absolute",
              top: "calc(50% - 1px)",
              right: "12px",
            }}
          />
        </DropdownComponent>
      );
    case "Active":
      return (
        <DropdownComponent1 style={override}>
          <Bar>
            <SelectText>{text}</SelectText>
            <Arrow
              override={{
                position: "absolute",
                height: "3px",
                width: "7px",
                top: "calc(50% - 1px)",
                right: "12px",
              }}
            />
          </Bar>
          <Content>
            <Option
              color="Gray"
              text="Not Started"
              override={{
                height: "fit-content",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
            <Divider
              override={{
                height: "1px",
                width: "100%",
              }}
            />
            <Option
              color="Orange"
              text="Ongoing"
              override={{
                height: "fit-content",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
            <Divider
              override={{
                height: "1px",
                width: "100%",
              }}
            />
            <Option
              color="Green"
              text="Completed"
              override={{
                height: "fit-content",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
          </Content>
        </DropdownComponent1>
      );
    default:
      return null;
  }
};
