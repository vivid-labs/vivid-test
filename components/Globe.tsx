import globe from "./globe.svg";
import styled from "styled-components";
const GlobeComponent = styled.img`
  width: 24px;
  height: 24px;
`;
export const Globe = ({ override }: { override?: React.CSSProperties }) => {
  return <GlobeComponent src={globe.src} style={override} />;
};
