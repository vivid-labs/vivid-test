import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_1 from "./ellipse_1.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";
export const NavBar = ({
  override,
  type,
}: {
  override?: React.CSSProperties;
  type: string;
}) => {
  switch (type) {
    case "Colored":
      return (
        <div
          className="relative flex h-[82px] w-[1440px] items-center justify-between overflow-hidden p-2.5"
          style={override}
        >
          <img
            className="absolute h-full w-full object-cover"
            src={pictureAiMobileDesktopPng.src}
          />
          <div className="flex items-center">
            <OutlinedLogo />
          </div>
          <img
            className="h-[62px] w-[62px] rounded-[50%] object-cover"
            src={ellipse_1.src}
          />
        </div>
      );
    case "White":
      return (
        <div
          className="flex h-[82px] w-[1440px] items-center justify-between overflow-hidden bg-white p-2.5"
          style={override}
        >
          <NoOutlineLogo />
          <img
            className="h-[62px] w-[62px] rounded-[50%] object-cover"
            src={ellipse_1.src}
          />
        </div>
      );
    default:
      return null;
  }
};
