import { NoOutlineLogo } from "./NoOutlineLogo";
import ellipse_1 from "./ellipse_1.jpg";
export const TypeWhite = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        position: "relative",
        width: "100%",
        height: "82px",
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
      figma-id="10:224"
    >
      <NoOutlineLogo />
      <img
        style={{
          width: "62px",
          height: "62px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
          borderRadius: "50%",
        }}
        src={ellipse_1.src}
        figma-id="15:166"
      />
    </div>
  );
};
