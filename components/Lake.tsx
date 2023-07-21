import lake from "./lake.png";
export const Lake = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        width: "fit-content",
        position: "relative",
        height: "562.43px",
        ...override,
      }}
      figma-id="4:6:307"
    >
      <img
        style={{
          width: "376px",
          height: "563px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
        }}
        src={lake.src}
        figma-id="4:107:522"
      />
    </div>
  );
};
