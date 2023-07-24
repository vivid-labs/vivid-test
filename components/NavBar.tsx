import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_1 from "./ellipse_1.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";
export const NavBar = ({
  override,
  type,
}: {
  override?: any;
  type: string;
}) => {
  switch (type) {
    case "Colored":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            position: "relative",
            width: "1440px",
            height: "82px",
            ...override,
          }}
          figma-id="8:10:220"
        >
          <img
            src={pictureAiMobileDesktopPng.src}
            style={{
              objectFit: "cover",
              opacity: 1,
              position: "absolute",
              inset: 0,
              height: "100%",
              width: "100%",
            }}
            figma-id=""
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
            figma-id="8:29:736"
          >
            <OutlinedLogo figma-id="8:27:222" />
          </div>
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
            figma-id="8:15:173"
          />
        </div>
      );
    case "White":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            position: "relative",
            width: "1440px",
            height: "82px",
            backgroundColor: "rgb(255, 255, 255)",
            ...override,
          }}
          figma-id="8:10:224"
        >
          <NoOutlineLogo figma-id="8:27:232" />
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
            figma-id="8:15:166"
          />
        </div>
      );
    default:
      return null;
  }
};
