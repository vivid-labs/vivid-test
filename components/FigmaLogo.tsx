import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative flex h-[50px] w-[50px] items-center justify-center"
      style={override}
    >
      <img
        className="h-[31px] w-5 flex-shrink-0 object-cover"
        src={figmaLogoWhite_1.src}
      />
    </div>
  );
};
