import uRobot from "./uRobot.svg";
import styled from "styled-components";
const URobotComponent = styled.img`
  width: 24px;
  height: 24px;
`;
export const URobot = ({ override }: { override?: React.CSSProperties }) => {
  return <URobotComponent src={uRobot.src} style={override} />;
};
