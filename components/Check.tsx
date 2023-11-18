import check from "./check.svg";
import styled from "styled-components";
const CheckComponent = styled.img`
  width: 24px;
  height: 24px;
`;
export const Check = ({ override }: { override?: React.CSSProperties }) => {
  return <CheckComponent src={check.src} style={override} />;
};
