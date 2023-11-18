import archive from "./archive.svg";
import styled from "styled-components";
const ArchiveComponent = styled.img`
  width: 13px;
  height: 13px;
`;
export const Archive = ({ override }: { override?: React.CSSProperties }) => {
  return <ArchiveComponent src={archive.src} style={override} />;
};
