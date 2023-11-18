import rectangle_4Image from "./rectangle_4Image.png";
import styled from "styled-components";
const Rectangle_4 = styled.img`
  position: absolute;
  width: 32px;
  left: 0px;
  height: 32px;
  top: 0px;
  object-fit: cover;
  border-radius: 8px;
`;
const Frame_33 = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 32px;
  height: 32px;
  background-color: rgb(255, 255, 255);
`;
const PhotoAvatarComponent = styled.div`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
`;
const Rectangle_4Image = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 10px;
`;
const PhotoAvatarComponent1 = styled.div`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
`;
const Rectangle_4Image1 = styled.img`
  position: absolute;
  width: 24px;
  left: 0px;
  height: 24px;
  top: 0px;
  object-fit: cover;
  border-radius: 6px;
`;
const Frame_30 = styled.div`
  overflow: hidden;
  border-radius: 6px;
  position: relative;
  width: 24px;
  height: 24px;
`;
const PhotoAvatarComponent2 = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  position: relative;
`;
const Rectangle_4Image2 = styled.img`
  position: absolute;
  width: 20px;
  left: 0px;
  height: 20px;
  top: 0px;
  object-fit: cover;
  border-radius: 5px;
`;
const Frame_35 = styled.div`
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  width: 20px;
  height: 20px;
  background-color: rgb(255, 255, 255);
`;
const PhotoAvatarComponent3 = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
`;
const Rectangle_4Image3 = styled.img`
  position: absolute;
  width: 16px;
  left: 0px;
  height: 16px;
  top: 0px;
  object-fit: cover;
  border-radius: 4px;
`;
const Frame_34 = styled.div`
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: 16px;
  height: 16px;
  background-color: rgb(255, 255, 255);
`;
const PhotoAvatarComponent4 = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
`;
export const PhotoAvatar = ({
  override,
  size,
}: {
  override?: React.CSSProperties;
  size: string;
}) => {
  switch (size) {
    case "Large":
      return (
        <PhotoAvatarComponent style={override}>
          <Frame_33>
            <Rectangle_4 src={rectangle_4Image.src} />
          </Frame_33>
        </PhotoAvatarComponent>
      );
    case "Extra Large":
      return (
        <PhotoAvatarComponent1 style={override}>
          <Rectangle_4Image src={rectangle_4Image.src} />
        </PhotoAvatarComponent1>
      );
    case "Medium":
      return (
        <PhotoAvatarComponent2 style={override}>
          <Frame_30>
            <Rectangle_4Image1 src={rectangle_4Image.src} />
          </Frame_30>
        </PhotoAvatarComponent2>
      );
    case "Small":
      return (
        <PhotoAvatarComponent3 style={override}>
          <Frame_35>
            <Rectangle_4Image2 src={rectangle_4Image.src} />
          </Frame_35>
        </PhotoAvatarComponent3>
      );
    case "Extra Small":
      return (
        <PhotoAvatarComponent4 style={override}>
          <Frame_34>
            <Rectangle_4Image3 src={rectangle_4Image.src} />
          </Frame_34>
        </PhotoAvatarComponent4>
      );
    default:
      return null;
  }
};
