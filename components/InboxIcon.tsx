import inboxIcon from "./inboxIcon.svg";
import styled from "styled-components";
const InboxIconComponent = styled.img`
  width: 16px;
  height: 16px;
`;
export const InboxIcon = ({ override }: { override?: React.CSSProperties }) => {
  return <InboxIconComponent src={inboxIcon.src} style={override} />;
};
