import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_2 from "./ellipse_2.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";
export const SideBar = ({
  override,
  style,
}: {
  override?: any;
  style: string;
}) => {
  switch (style) {
    case "Colored":
      return (
        <div style={override}>
          <img src={pictureAiMobileDesktopPng.src} />
          <OutlinedLogo
            override={{
              height: "51px",
              width: "52px",
            }}
          />
          <img src={ellipse_2.src} />
        </div>
      );
    case "White":
      return (
        <div style={override}>
          <NoOutlineLogo
            override={{
              height: "44px",
              width: "42px",
            }}
          />
          <img src={ellipse_2.src} />
        </div>
      );
    default:
      return null;
  }
};
