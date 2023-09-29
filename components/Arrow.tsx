import arrow from "./arrow.svg";
import styled from "styled-components";
const ArrowComponent = styled.img`
  width: 7px;
  height: 3px;
`;
export const Arrow = ({ override }: { override?: React.CSSProperties }) => {
  return <ArrowComponent src={arrow.src} style={override} />;
};
