import trash from "./trash.svg";
import styled from "styled-components";
const TrashComponent = styled.img`
  width: 11px;
  height: 13px;
`;
export const Trash = ({ override }: { override?: React.CSSProperties }) => {
  return <TrashComponent src={trash.src} style={override} />;
};
