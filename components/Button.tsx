import styled from "styled-components";
const Yes = styled.p`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-family: Inter;
  font-weight: 600;
`;
const ButtonComponent = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 160px;
  height: 51px;
  background-color: rgb(9, 85, 127);
`;
export const Button = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <ButtonComponent style={override}>
      <Yes>{text}</Yes>
    </ButtonComponent>
  );
};
