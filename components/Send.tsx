import send from "./send.svg";
import styled from "styled-components";
const SendComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const Send = ({ override }: { override?: React.CSSProperties }) => {
  return <SendComponent src={send.src} style={override} />;
};
