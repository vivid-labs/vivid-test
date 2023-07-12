import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        position: "relative",
        width: "50px",
        height: "50px",
        ...override,
      }}
      figma-id="29:482"
    >
      <img
        style={{
          width: "20px",
          height: "31px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
        }}
        src={figmaLogoWhite_1.src}
        figma-id="29:481"
      />
    </div>
  );
};
