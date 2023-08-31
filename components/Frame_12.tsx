import rectangleImage from "./rectangleImage.png";
import rectangle from "./rectangle.png";
import styled from "styled-components";
const AppFeaturesThatHelpManageMoneyMoreOrganized = styled.p`
  width: 769px;
  color: rgb(19, 19, 19);
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2em;
`;
const MakeYourLifeEasierWithComprehensiveIntegrationSupportThatAllowsFinancialPlanningToBeMoreSeamless = styled.p`
  width: 531px;
  color: rgb(56, 56, 56);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6em;
`;
const Frame_19 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  height: fit-content;
  width: fit-content;
`;
const Text = styled.p`
  color: rgb(3, 4, 94);
  font-size: 18px;
  font-weight: 400;
  line-height: 1em;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0px 24px;
  border-radius: 24px;
  height: 48px;
  background-color: rgb(255, 109, 0);
`;
const Frame_13 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  height: fit-content;
  width: fit-content;
`;
const RectangleImage = styled.img`
  height: 100%;
  width: 100%;
`;
const Rectangle = styled.div`
  position: absolute;
  width: 512px;
  left: 511.84px;
  height: 848px;
  top: 0px;
  transform: scale(-100%, 100%);
  overflow: hidden;
`;
const RectangleImage1 = styled.img`
  height: 100%;
  width: 100%;
`;
const RectangleDiv = styled.div`
  position: absolute;
  rotate: -0deg;
  width: 458px;
  left: 473.15px;
  height: 798px;
  top: 16.6px;
  transform: scale(-100%, 100%);
  overflow: hidden;
`;
const Frame_41 = styled.div`
  position: absolute;
  width: 512px;
  left: 688.16px;
  height: 848px;
  top: 48px;
`;
const Frame_18 = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  gap: 97px;
  height: fit-content;
  padding: 96px 0px;
  position: relative;
  width: 100%;
  border-style: solid;
  border-color: rgb(129, 168, 196);
  border-bottom-width: 10px;
`;
const Frame_12Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 0px 264px;
  width: 100%;
  font-family: DM Sans;
`;
export const Frame_12 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <Frame_12Component style={override}>
      <Frame_18>
        <Frame_13>
          <Frame_19>
            <AppFeaturesThatHelpManageMoneyMoreOrganized>
              App features that help manage money more organized
            </AppFeaturesThatHelpManageMoneyMoreOrganized>
            <MakeYourLifeEasierWithComprehensiveIntegrationSupportThatAllowsFinancialPlanningToBeMoreSeamless>
              Make your life easier with comprehensive integration support that
              allows financial planning to be more seamless.
            </MakeYourLifeEasierWithComprehensiveIntegrationSupportThatAllowsFinancialPlanningToBeMoreSeamless>
          </Frame_19>
          <Button>
            <Text>Get Started</Text>
          </Button>
        </Frame_13>
        <Frame_41>
          <Rectangle>
            <RectangleImage src={rectangleImage.src} />
          </Rectangle>
          <RectangleDiv>
            <RectangleImage1 src={rectangle.src} />
          </RectangleDiv>
        </Frame_41>
      </Frame_18>
    </Frame_12Component>
  );
};
