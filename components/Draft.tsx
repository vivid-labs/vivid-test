import draft from "./draft.svg";
import styled from "styled-components";
const DraftComponent = styled.img`
  width: 11px;
  height: 13px;
`;
export const Draft = ({ override }: { override?: React.CSSProperties }) => {
  return <DraftComponent src={draft.src} style={override} />;
};
