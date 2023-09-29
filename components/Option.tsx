import styled from "styled-components";

const Text = styled.p`
  color: rgb(46, 46, 46);
  font-size: 12px;
  font-weight: 400;
`;

const Badge = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 4px 6px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
`;

const OptionComponent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 4px 8px;
  width: 95px;
  background-color: rgb(255, 255, 255);
`;

export const Option = ({
  override,
  color,
  text,
}: {
  override?: React.CSSProperties;
  color: string;
  text: string;
}) => {
  const badgeColor = {
    Gray: {
      borderColor: "rgb(226, 226, 226)",
      backgroundColor: "rgb(251, 251, 251)",
    },
    Orange: {
      borderColor: "rgb(246, 215, 186)",
      backgroundColor: "rgb(249, 230, 212)",
    },
    Green: {
      borderColor: "rgb(168, 245, 197)",
      backgroundColor: "rgb(199, 250, 218)",
    },
  }[color];
  return (
    <OptionComponent style={override}>
      <Badge
        style={{
          ...badgeColor,
        }}
      >
        <Text>{text}</Text>
      </Badge>
    </OptionComponent>
  );
};
