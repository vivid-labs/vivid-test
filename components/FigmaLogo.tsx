import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex justify-center items-center relative w-[50px] h-[50px]"
      style={override}
    >
      <img
        className="w-5 h-[31px] flex-shrink-0 object-cover"
        src={figmaLogoWhite_1.src}
      />
    </div>
  );
};
