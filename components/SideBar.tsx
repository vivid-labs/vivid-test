import styleColored from "./styleColored.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_2 from "./ellipse_2.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";


export const SideBar = ({
  override,
  style
}: {
  override?: any;
  style: string;
}) => {
  

  switch (style) {
    case "Colored":
      return <div style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        position: "relative",
        width: "62px",
        height: "676px",
        ...override
      }} figma-id="15:262"><img src={styleColored.src} style={{
          objectFit: "cover",
          opacity: 1,
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%"
        }} figma-id="{\"objectFit\":\"cover\",\"opacity\":1}d2e2e0e68f0404c71db06348976ba084f36ad43a" /><OutlinedLogo override={{
          height: "51px",
          width: "52px"
        }} /><img style={{
          width: "100%",
          height: "42px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
          borderRadius: "50%"
        }} src={ellipse_2.src} figma-id="15:261" /></div>;
    case "White":
      return <div style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        position: "relative",
        width: "62px",
        height: "676px",
        backgroundColor: "rgb(255, 255, 255)",
        ...override
      }} figma-id="15:270"><NoOutlineLogo override={{
          height: "44px",
          width: "42px"
        }} /><img style={{
          width: "100%",
          height: "42px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
          borderRadius: "50%"
        }} src={ellipse_2.src} figma-id="15:272" /></div>;
    default:
      return null;
  }
};