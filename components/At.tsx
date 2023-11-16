import at from "./at.svg";
import styled from "styled-components";
const AtComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const At = ({ override }: { override?: React.CSSProperties }) => {
  return <AtComponent src={at.src} style={override} />;
};
