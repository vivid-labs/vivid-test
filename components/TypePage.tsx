import mobile from "./mobile.svg";
import { CompactIconButton } from "./CompactIconButton";
import styled from "styled-components";
const Selected = styled.div`
  position: absolute;
  width: 141px;
  left: 0px;
  height: 184px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.08);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  border-radius: 8px;
`;
const NatalieJason_1_1 = styled.p`
  position: absolute;
  left: 8px;
  top: 36px;
  color: rgb(0, 0, 0);
  font-size: 11px;
  font-family: Universal Sans Text Trial;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.3em;
`;
const Mobile = styled.img`
  position: absolute;
  width: 12px;
  left: calc(50% - 6px);
  height: 12px;
  top: calc(50% - 6px);
`;
const PageHeaderIconLight = styled.div`
  overflow: hidden;
  border-radius: 4px;
  position: absolute;
  box-shadow: inset 0px -0.5px 0px 0.5px rgba(0, 0, 0, 0.1),
    inset 0px 0.5px 0px rgba(0, 0, 0, 0.1);
  width: 24px;
  left: 8px;
  height: 24px;
  top: 8px;
  background-color: rgb(255, 255, 255);
`;
const Rectangle_39272 = styled.div`
  position: absolute;
  width: 112px;
  left: 8px;
  height: 8px;
  top: 58px;
  background-color: rgba(0, 0, 0, 0.04);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.04);
  border-width: 1px;
  border-radius: 2px;
`;
const Rectangle_39273 = styled.div`
  position: absolute;
  width: 108px;
  left: 8px;
  height: 8px;
  top: 74px;
  background-color: rgba(0, 0, 0, 0.04);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.04);
  border-width: 1px;
  border-radius: 2px;
`;
const Rectangle_39274 = styled.div`
  position: absolute;
  width: 102px;
  left: 8px;
  height: 8px;
  top: 90px;
  background-color: rgba(0, 0, 0, 0.04);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.04);
  border-width: 1px;
  border-radius: 2px;
`;
const Rectangle_39275 = styled.div`
  position: absolute;
  width: 112px;
  left: 8px;
  height: 8px;
  top: 106px;
  background-color: rgba(0, 0, 0, 0.04);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.04);
  border-width: 1px;
  border-radius: 2px;
`;
const MobileFileIcons = styled.div`
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: 129px;
  height: 129px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);
  border-width: 1px;
  background-color: rgb(250, 250, 250);
`;
const NatalieJason_1_1Text = styled.p`
  flex: 1 1 0%;
  min-width: 0px;
  color: rgb(0, 0, 0);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.3em;
`;
const TitleAndButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: fit-content;
  width: 100%;
`;
const SkiffPage = styled.p`
  color: rgba(0, 0, 0, 0.57);
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.3em;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 129px;
  flex: 1 1 0%;
  min-height: 0px;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  height: fit-content;
  padding: 6px;
  position: absolute;
  width: 141px;
  left: 0px;
  top: 0px;
`;
const TypePageComponent = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 184px;
  font-family: Universal Sans Text;
`;
export const TypePage = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <TypePageComponent style={override}>
      <Selected />
      <Container>
        <MobileFileIcons>
          <NatalieJason_1_1>Natalie / Jason 1:1</NatalieJason_1_1>
          <PageHeaderIconLight>
            <Mobile src={mobile.src} />
          </PageHeaderIconLight>
          <Rectangle_39272 />
          <Rectangle_39273 />
          <Rectangle_39274 />
          <Rectangle_39275 />
        </MobileFileIcons>
        <Desc>
          <DescContainer>
            <TitleAndButton>
              <NatalieJason_1_1Text>Natalie / Jason 1:1</NatalieJason_1_1Text>
              <CompactIconButton hover="no" size="small" type="ghost" />
            </TitleAndButton>
            <Info>
              <SkiffPage>Skiff page</SkiffPage>
            </Info>
          </DescContainer>
        </Desc>
      </Container>
    </TypePageComponent>
  );
};
