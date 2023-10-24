import uGlobe from "./uGlobe.svg";
import styled from "styled-components";
const UGlobeComponent = styled.img`
  width: 24px;
  height: 24px;
`;
export const UGlobe = ({ override }: { override?: React.CSSProperties }) => {
  return <UGlobeComponent src={uGlobe.src} style={override} />;
};
