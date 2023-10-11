import vector from "./vector.svg";
import styled from "styled-components";
const VectorComponent2Component = styled.img`
  width: 13px;
  height: 11px;
`;
export const VectorComponent2 = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <VectorComponent2Component src={vector.src} style={override} />;
};
