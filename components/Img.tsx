import img from "./img.png";
import styled from "styled-components";
const ImgImage = styled.img`
  transform: scale(6100%, 6100%) translate(-50.82%, -16.39%);
  transform-origin: top left;
  height: 100%;
  width: 100%;
`;
const ImgComponent = styled.div`
  width: 100%;
  height: 16px;
  transform-origin: top left;
  overflow: hidden;
`;
export const Img = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <ImgComponent style={override}>
      <ImgImage src={img.src} />
    </ImgComponent>
  );
};
