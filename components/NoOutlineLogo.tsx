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
        className="absolute right-[0%] w-full bottom-[0%] h-full object-cover opacity-100"
        figma-id="8:27:196"
      />
    </div>
  );
};
