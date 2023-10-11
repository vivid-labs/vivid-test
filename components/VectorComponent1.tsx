import vectorImage from "./vectorImage.svg";
import styled from "styled-components";
const VectorComponent1Component = styled.img`
  width: 11px;
  height: 13px;
`;
export const VectorComponent1 = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <VectorComponent1Component src={vectorImage.src} style={override} />;
};
