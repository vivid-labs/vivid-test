import content from "./content.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_1 from "./ellipse_1.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";


export const NavBar = ({
  override,
  type
}: {
  override?: any;
  type: string;
}) => {
  

  switch (type) {
    case "Colored":
      return <div style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        position: "relative",
        width: "1440px",
        height: "82px",
        ...override
      }} figma-id="255:182"><img src={content.src} style={{
          objectFit: "cover",
          opacity: 1,
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%"
        }} figma-id="{\"objectFit\":\"cover\",\"opacity\":1}d2e2e0e68f0404c71db06348976ba084f36ad43a" /><div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "fit-content",
          height: "fit-content",
          position: "relative",
          flexShrink: 0
        }} figma-id="255:183"><OutlinedLogo /></div><img style={{
          width: "62px",
          height: "62px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
          borderRadius: "50%"
        }} src={ellipse_1.src} figma-id="255:185" /></div>;
    case "White":
      return <div style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        position: "relative",
        width: "1440px",
        height: "82px",
        backgroundColor: "rgb(255, 255, 255)",
        ...override
      }} figma-id="255:186"><NoOutlineLogo /><img style={{
          width: "62px",
          height: "62px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
          borderRadius: "50%"
        }} src={ellipse_1.src} figma-id="255:188" /></div>;
    default:
      return null;
  }
};