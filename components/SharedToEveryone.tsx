import styled from "styled-components";
const SharedToEveryoneComponent = styled.p`
  color: rgb(111, 111, 111);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02px;
  line-height: 16px;
  width: 100%;
  font-family: Inter;
`;
export const SharedToEveryone = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <SharedToEveryoneComponent style={override}>
      Shared to everyone
    </SharedToEveryoneComponent>
  );
};
