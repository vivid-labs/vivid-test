import img from "./img.png";
import styled from "styled-components";
const ImgImage = styled.img`
  transform: scale(6100%, 6100%) translate(-18.03%, -85.25%);
  transform-origin: top left;
  height: 100%;
  width: 100%;
`;
const Img = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  width: 100%;
  top: 0%;
  bottom: 0%;
  height: 100%;
  transform-origin: top left;
  overflow: hidden;
`;
const ImgComponent2Component = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;
export const ImgComponent2 = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <ImgComponent2Component style={override}>
      <Img>
        <ImgImage src={img.src} />
      </Img>
    </ImgComponent2Component>
  );
};
