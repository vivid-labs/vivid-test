import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="relative w-[62px] h-[62px]"
      figma-id="8:27:221"
    >
      <img
        src={logo_2.src}
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        figma-id="8:27:196"
      />
    </div>
  );
};
