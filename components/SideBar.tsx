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
          className="overflow-hidden flex flex-col justify-between items-center p-2.5 relative w-[62px] h-[676px]"
          style={override}
        >
          <img
            className="object-cover absolute h-full w-full"
            src={pictureAiMobileDesktopPng.src}
          />
          <OutlinedLogo
            override={{
              height: "51px",
              width: "52px",
            }}
          />
          <img
            className="w-full h-[42px] flex-shrink-0 object-cover rounded-[50%]"
            src={ellipse_2.src}
          />
        </div>
      );
    case "White":
      return (
        <div
          className="overflow-hidden flex flex-col justify-between items-center p-2.5 relative w-[62px] h-[676px] bg-white"
          style={override}
        >
          <NoOutlineLogo
            override={{
              height: "44px",
              width: "42px",
            }}
          />
          <img
            className="w-full h-[42px] flex-shrink-0 object-cover rounded-[50%]"
            src={ellipse_2.src}
          />
        </div>
      );
    default:
      return null;
  }
};
