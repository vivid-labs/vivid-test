import vectorImage2 from "./vectorImage2.svg";
import styled from "styled-components";
const VectorComponentComponent = styled.img`
  width: 11px;
  height: 11px;
`;
export const VectorComponent = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <VectorComponentComponent src={vectorImage2.src} style={override} />;
};
