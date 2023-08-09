import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex justify-center items-center w-[50px] h-[50px]"
      style={override}
    >
      <img className="w-5 h-[31px] object-cover" src={figmaLogoWhite_1.src} />
    </div>
  );
};
