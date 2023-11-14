import invite from "./invite.svg";
import styled from "styled-components";
const InviteComponent = styled.img`
  width: 13px;
  height: 12px;
`;
export const Invite = ({ override }: { override?: React.CSSProperties }) => {
  return <InviteComponent src={invite.src} style={override} />;
};
