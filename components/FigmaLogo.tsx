import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override}>
      <img src={figmaLogoWhite_1.src} />
    </div>
  );
};
