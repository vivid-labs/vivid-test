import spam from "./spam.svg";
import styled from "styled-components";
const SpamComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const Spam = ({ override }: { override?: React.CSSProperties }) => {
  return <SpamComponent src={spam.src} style={override} />;
};
