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
          style={override}
          className="overflow-hidden flex justify-between items-center p-[10px] relative w-[1440px] h-[82px]"
          figma-id="8:10:220"
        >
          <img
            src={pictureAiMobileDesktopPng.src}
            className="object-cover absolute h-full w-full"
            figma-id=""
          />
          <div
            className="flex items-center relative flex-shrink-0"
            figma-id="8:29:736"
          >
            <OutlinedLogo
              override={{
                position: "relative",
              }}
              figma-id="8:27:222"
            />
          </div>
          <img
            src={ellipse_1.src}
            className="w-[62px] h-[62px] flex-shrink-0 object-cover rounded-[50%]"
            figma-id="8:15:173"
          />
        </div>
      );
    case "White":
      return (
        <div
          style={override}
          className="overflow-hidden flex justify-between items-center p-[10px] relative w-[1440px] h-[82px] bg-[rgb(255,_255,_255)]"
          figma-id="8:10:224"
        >
          <NoOutlineLogo
            override={{
              position: "relative",
            }}
            figma-id="8:27:232"
          />
          <img
            src={ellipse_1.src}
            className="w-[62px] h-[62px] flex-shrink-0 object-cover rounded-[50%]"
            figma-id="8:15:166"
          />
        </div>
      );
    default:
      return null;
  }
};
