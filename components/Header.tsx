import styled from "styled-components";
const Mail = styled.p`
  color: rgba(255, 255, 255, 0.28);
  font-size: 13px;
  font-weight: 500;
  line-height: 16.9px;
`;
const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 8px 20px;
  border-radius: 4px;
  width: 239px;
`;
export const Header = ({
  override,
  headerText,
}: {
  override?: React.CSSProperties;
  headerText: string;
}) => {
  return (
    <HeaderComponent style={override}>
      <Mail>{headerText}</Mail>
    </HeaderComponent>
  );
};
