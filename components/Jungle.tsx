import jungle from "./jungle.png";
export const Jungle = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        width: "fit-content",
        position: "relative",
        height: "282.12px",
        ...override,
      }}
      figma-id="4:6:309"
    >
      <img
        style={{
          width: "376px",
          height: "283px",
          flexShrink: 0,
          objectFit: "cover",
          opacity: 1,
        }}
        src={jungle.src}
        figma-id="4:107:446"
      />
    </div>
  );
};
