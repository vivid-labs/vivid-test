import expandIcon from "./expandIcon.svg";
import styled from "styled-components";
const V = styled.p`
  color: rgb(255, 255, 255);
  font-size: 9px;
  font-weight: 600;
  line-height: 19px;
`;
const Logo = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4px 0px 5px;
  border-radius: 4px;
  width: 16px;
  height: 16px;
  background-color: rgb(80, 121, 228);
`;
const VividLabs = styled.p`
  color: rgb(111, 111, 111);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.03px;
  line-height: 18px;
`;
const OrgButtonComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 5px 10px 5px 11px;
  border-radius: 9999px;
  height: 28px;
`;
const VText = styled.p`
  color: rgb(255, 255, 255);
  font-size: 9px;
  font-weight: 600;
  line-height: 19px;
`;
const LogoDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4px 0px 5px;
  border-radius: 4px;
  width: 16px;
  height: 16px;
  background-color: rgb(80, 121, 228);
`;
const VividLabsText = styled.p`
  color: rgb(111, 111, 111);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.03px;
  line-height: 18px;
`;
const ExpandIcon = styled.img`
  width: 5px;
  height: 10px;
`;
const OrgButtonComponent1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 5px 10px 5px 11px;
  border-radius: 15px;
  height: 28px;
  background-color: rgb(237, 237, 237);
`;
export const OrgButton = ({
  override,
  state,
  logoLetter,
  companyName,
}: {
  override?: React.CSSProperties;
  state: string;
  logoLetter: string;
  companyName: string;
}) => {
  switch (state) {
    case "Default":
      return (
        <OrgButtonComponent style={override}>
          <Logo>
            <V>{logoLetter}</V>
          </Logo>
          <VividLabs>{companyName}</VividLabs>
        </OrgButtonComponent>
      );
    case "Hover":
      return (
        <OrgButtonComponent1 style={override}>
          <LogoDiv>
            <VText>{logoLetter}</VText>
          </LogoDiv>
          <VividLabsText>{companyName}</VividLabsText>
          <ExpandIcon src={expandIcon.src} />
        </OrgButtonComponent1>
      );
    default:
      return null;
  }
};
