import vector from "./vector.svg";
import styled from "styled-components";
const VectorComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const Vector = ({ override }: { override?: React.CSSProperties }) => {
  return <VectorComponent src={vector.src} style={override} />;
};
