import dashedSeparator from "./dashedSeparator.svg";
import styled from "styled-components";
const DashedSeparatorComponent = styled.img`
  width: 24px;
  height: 0px;
`;
export const DashedSeparator = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <DashedSeparatorComponent src={dashedSeparator.src} style={override} />
  );
};
