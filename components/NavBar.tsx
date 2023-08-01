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
          className="overflow-hidden flex justify-between items-center p-2.5 relative w-[1440px] h-[82px]"
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
        >
          <img
            className="object-cover absolute h-full w-full"
            src={pictureAiMobileDesktopPng.src}
            style={{
              objectFit: "cover",
              position: "absolute",
              inset: 0,
              height: "100%",
              width: "100%",
            }}
          />
          <div
            className="flex items-center relative flex-shrink-0"
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              height: "fit-content",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <OutlinedLogo />
          </div>
          <img
            className="w-[62px] h-[62px] flex-shrink-0 object-cover rounded-[50%]"
            style={{
              width: "62px",
              height: "62px",
              flexShrink: 0,
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={ellipse_1.src}
          />
        </div>
      );
    case "White":
      return (
        <div
          className="overflow-hidden flex justify-between items-center p-2.5 relative w-[1440px] h-[82px] bg-white"
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
        >
          <NoOutlineLogo />
          <img
            className="w-[62px] h-[62px] flex-shrink-0 object-cover rounded-[50%]"
            style={{
              width: "62px",
              height: "62px",
              flexShrink: 0,
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={ellipse_1.src}
          />
        </div>
      );
    default:
      return null;
  }
};
