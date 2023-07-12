import { NoOutlineLogo } from "./NoOutlineLogo";
import ellipse_2 from "./ellipse_2.jpg";
export const StyleWhite = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-between items-center p-[10px] relative w-full h-[676px] bg-[rgb(255,_255,_255)]"
      figma-id="15:270"
    >
      <NoOutlineLogo
        override={{
          height: "44px",
          width: "42px",
        }}
      />
      <img
        src={ellipse_2.src}
        className="w-full h-[42px] flex-shrink-0 object-cover opacity-100 rounded-[50%]"
        figma-id="15:272"
      />
    </div>
  );
};
