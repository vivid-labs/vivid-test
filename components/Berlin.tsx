import berlin from "./berlin.png";
export const Berlin = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        width: "fit-content",
        position: "relative",
        height: "563.76px",
        ...override,
      }}
      figma-id="10:6:311"
    >
      <img
        style={{
          width: "376px",
          height: "564px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
        }}
        src={berlin.src}
        figma-id="10:107:472"
      />
    </div>
  );
};
