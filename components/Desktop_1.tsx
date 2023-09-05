import screenshot_2023_09_05At_4_10_1 from "./screenshot_2023_09_05At_4_10_1.jpg";
import logo from "./logo.png";
import { Button } from "./Button";
import x from "./x.svg";
import styled from "styled-components";
const Screenshot_2023_09_05At_4_10_1Image = styled.img`
  transform: scale(100%, 100.81%) translate(0%, -0.8%);
  transform-origin: top left;
  height: 100%;
  width: 100%;
`;
const Screenshot_2023_09_05At_4_10_1 = styled.div`
  position: absolute;
  width: 1440px;
  left: 0px;
  height: 1024px;
  top: 11px;
  transform-origin: top left;
  overflow: hidden;
`;
const ModalTitle = styled.p`
  width: 100%;
  color: rgb(0, 150, 134);
  font-size: 36px;
  font-weight: 700;
`;
const Logo = styled.img`
  width: 73px;
  height: 62px;
  object-fit: cover;
`;
const LogoContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 9999px;
  width: 108px;
  height: 95px;
  background-color: rgb(255, 126, 64);
`;
const Description = styled.p`
  width: 100%;
  color: rgb(91, 100, 117);
  font-size: 24px;
  font-weight: 700;
`;
const X = styled.img`
  width: 20px;
  height: 22px;
`;
const Frame_1 = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 1px 0px;
  position: absolute;
  right: 30px;
  top: 22.5px;
`;
const Modal = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  height: fit-content;
  padding: 64px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  width: 480px;
  background-color: rgb(255, 255, 255);
`;
const BackgroundOverlay = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 139px 334px;
  width: 100%;
  flex: 1 1 0%;
  min-height: 0px;
  background-color: rgba(179, 179, 179, 0.5);
`;
const Desktop_1Component = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  width: 100%;
  height: 1008px;
  background-color: rgb(255, 255, 255);
  font-family: Arial;
`;
export const Desktop_1 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <Desktop_1Component style={override}>
      <Screenshot_2023_09_05At_4_10_1>
        <Screenshot_2023_09_05At_4_10_1Image
          src={screenshot_2023_09_05At_4_10_1.src}
        />
      </Screenshot_2023_09_05At_4_10_1>
      <BackgroundOverlay>
        <Modal>
          <ModalTitle>Welcome to Pri-AI!</ModalTitle>
          <LogoContainer>
            <Logo src={logo.src} />
          </LogoContainer>
          <Description>Start asking about your data</Description>
          <Button
            text="Get started"
            override={{
              height: "fit-content",
              width: "fit-content",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(0, 148, 129)",
              padding: "16px",
              borderRadius: "8px",
            }}
          />
          <Frame_1>
            <X src={x.src} />
          </Frame_1>
        </Modal>
      </BackgroundOverlay>
    </Desktop_1Component>
  );
};
