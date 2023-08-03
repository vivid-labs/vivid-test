import content from "./content.jpg";
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
          style={override}
        >
          <img
            className="object-cover absolute h-full w-full"
            src={content.src}
          />
          <div className="flex items-center relative flex-shrink-0">
            <OutlinedLogo />
          </div>
          <img
            className="w-[62px] h-[62px] flex-shrink-0 object-cover rounded-[50%]"
            src={ellipse_1.src}
          />
        </div>
      );
    case "White":
      return (
        <div
          className="overflow-hidden flex justify-between items-center p-2.5 relative w-[1440px] h-[82px] bg-white"
          style={override}
        >
          <NoOutlineLogo />
          <img
            className="w-[62px] h-[62px] flex-shrink-0 object-cover rounded-[50%]"
            src={ellipse_1.src}
          />
        </div>
      );
    default:
      return null;
  }
};
