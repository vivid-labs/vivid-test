import compose from "./compose.svg";
import styled from "styled-components";
const ComposeComponent = styled.img`
  width: 14px;
  height: 14px;
`;
export const Compose = ({ override }: { override?: React.CSSProperties }) => {
  return <ComposeComponent src={compose.src} style={override} />;
};
