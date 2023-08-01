import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex justify-center items-center relative w-[50px] h-[50px]"
    >
      <img
        src={figmaLogoWhite_1.src}
        className="w-5 h-[31px] flex-shrink-0 object-cover"
      />
    </div>
  );
};
