import ski from "./ski.png";
export const Ski = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        width: "fit-content",
        position: "relative",
        height: "416px",
        ...override,
      }}
      figma-id="4:6:315"
    >
      <img
        style={{
          width: "376px",
          height: "416px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
        }}
        src={ski.src}
        figma-id="4:107:497"
      />
    </div>
  );
};
