import message from "./message.svg";
import styled from "styled-components";
const MessageComponent = styled.img`
  width: 100%;
  height: 11px;
`;
export const Message = ({ override }: { override?: React.CSSProperties }) => {
  return <MessageComponent src={message.src} style={override} />;
};
