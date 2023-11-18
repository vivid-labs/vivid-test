import mobileFileIcons from "./mobileFileIcons.png";
import mobileFileIconsImage from "./mobileFileIconsImage.png";
import mobileFileIconsImage1 from "./mobileFileIconsImage1.png";
import mdiPlay from "./mdiPlay.svg";
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

const Image = styled.img`
  object-fit: cover;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const ImageImage = styled.img`
  object-fit: cover;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const ImageImage1 = styled.img`
  object-fit: cover;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const MdiPlay = styled.img`
  position: absolute;
  width: 32px;
  left: calc(50% - 16px);
  height: 32px;
  top: calc(50% - 16px);
`;

const Text00_00 = styled.p`
  filter: drop-shadow(0px 4.03px 6.05px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 10.08px 15.12px rgba(0, 0, 0, 0.1));
  position: absolute;
  left: 83px;
  top: 104px;
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-family: Universal Sans Text Trial;
  font-weight: 400;
  line-height: 1.3em;
`;

const MobileFileIcons = styled.div`
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: 129px;
  height: 129px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.04);
  border-width: 1px;
`;

const SurfMacMiller = styled.p`
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

const Text4_6Mb = styled.p`
  color: rgba(0, 0, 0, 0.57);
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.3em;
`;

const Divider = styled.div`
  width: 2px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.34);
  border-radius: 50%;
`;

const Mp3 = styled.p`
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
  gap: 4px;
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

const TypeAudioVideoComponent = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 184px;
  font-family: Universal Sans Text;
`;

export const TypeAudioVideo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <TypeAudioVideoComponent style={override}>
      <Selected />
      <MobileFileIcons />
    </TypeAudioVideoComponent>
  );
};

const MobileFileIcons = () => (
  <Container>
    <MobileFileIcons>
      <Image src={mobileFileIcons.src} />
      <ImageImage src={mobileFileIconsImage.src} />
      <ImageImage1 src={mobileFileIconsImage1.src} />
      <Div />
      <MdiPlay src={mdiPlay.src} />
      <Text00_00>00:00</Text00_00>
    </MobileFileIcons>
    <Desc>
      <DescContainer>
        <TitleAndButton>
          <SurfMacMiller>Surf &#x2013;&#xa0;Mac Miller</SurfMacMiller>
          <CompactIconButton hover="no" size="small" type="ghost" />
        </TitleAndButton>
        <Info>
          <Text4_6Mb>4.6 MB</Text4_6Mb>
          <Divider />
          <Mp3>MP3</Mp3>
        </Info>
      </DescContainer>
    </Desc>
  </Container>
);
