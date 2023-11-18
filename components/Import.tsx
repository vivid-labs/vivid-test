import import from "./import.svg";
import styled from "styled-components";
const ImportComponent = styled.img`
  width: 13px;
  height: 12px;
`;


export const Import = ({
  override
}: {
  override?: React.CSSProperties;
}) => {
  

  return <ImportComponent src={import.src} style={override} />;
};