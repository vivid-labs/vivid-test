import checkIcon from "./checkIcon.svg";
import styled from "styled-components";
const CheckIconComponent = styled.img`
  width: 14px;
  height: 14px;
`;
export const CheckIcon = ({ override }: { override?: React.CSSProperties }) => {
  return <CheckIconComponent src={checkIcon.src} style={override} />;
};
