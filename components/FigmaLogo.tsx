import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "50px",
        height: "50px",
        ...override,
      }}
    >
      <img
        style={{
          width: "20px",
          height: "31px",
          flexShrink: 0,
          objectFit: "cover",
        }}
        src={figmaLogoWhite_1.src}
      />
    </div>
  );
};
