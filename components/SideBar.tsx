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
        <div
          style={override}
          className="overflow-hidden flex flex-col justify-between items-center p-[10px] relative w-[62px] h-[676px]"
          figma-id="8:15:262"
        >
          <img
            src={pictureAiMobileDesktopPng.src}
            className="object-cover absolute h-full w-full"
            figma-id=""
          />
          <OutlinedLogo
            override={{
              height: "51px",
              width: "52px",
              position: "relative",
            }}
            figma-id="8:27:246"
          />
          <img
            src={ellipse_2.src}
            className="w-full h-[42px] flex-shrink-0 object-cover rounded-[50%]"
            figma-id="8:15:261"
          />
        </div>
      );
    case "White":
      return (
        <div
          style={override}
          className="overflow-hidden flex flex-col justify-between items-center p-[10px] relative w-[62px] h-[676px] bg-[rgb(255,_255,_255)]"
          figma-id="8:15:270"
        >
          <NoOutlineLogo
            override={{
              height: "44px",
              width: "42px",
              position: "relative",
            }}
            figma-id="8:27:248"
          />
          <img
            src={ellipse_2.src}
            className="w-full h-[42px] flex-shrink-0 object-cover rounded-[50%]"
            figma-id="8:15:272"
          />
        </div>
      );
    default:
      return null;
  }
};
