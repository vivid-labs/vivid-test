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
          className="relative flex h-[676px] w-[62px] flex-col items-center justify-between overflow-hidden p-2.5"
          style={override}
        >
          <img
            className="absolute h-full w-full object-cover"
            src={pictureAiMobileDesktopPng.src}
          />
          <OutlinedLogo
            override={{
              height: "51px",
              width: "52px",
            }}
          />
          <img
            className="h-[42px] w-full flex-shrink-0 rounded-[50%] object-cover"
            src={ellipse_2.src}
          />
        </div>
      );
    case "White":
      return (
        <div
          className="flex h-[676px] w-[62px] flex-col items-center justify-between overflow-hidden bg-white p-2.5"
          style={override}
        >
          <NoOutlineLogo
            override={{
              height: "44px",
              width: "42px",
            }}
          />
          <img
            className="h-[42px] w-full flex-shrink-0 rounded-[50%] object-cover"
            src={ellipse_2.src}
          />
        </div>
      );
    default:
      return null;
  }
};
