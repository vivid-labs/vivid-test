import styled from "styled-components";
const DividerDiv = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  width: 100%;
  top: 0%;
  bottom: 0%;
  height: 100%;
  background-color: rgb(217, 217, 217);
`;
const DividerComponent = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
`;
export const Divider = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <DividerComponent style={override}>
      <DividerDiv />
    </DividerComponent>
  );
};
