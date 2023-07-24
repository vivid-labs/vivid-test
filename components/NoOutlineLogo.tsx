import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "62px",
        height: "62px",
        ...override,
      }}
      figma-id="8:27:221"
    >
      <img
        style={{
          position: "absolute",
          right: "0%",
          width: "100%",
          bottom: "0%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
        }}
        src={logo_2.src}
        figma-id="8:27:196"
      />
    </div>
  );
};
