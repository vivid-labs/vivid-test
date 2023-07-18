import image from "./image.png";
export const Delete = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "80px",
        height: "55px",
        ...override,
      }}
      figma-id="31:2967"
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
          borderRadius: "6px",
        }}
        src={image.src}
        figma-id="31:2966"
      />
    </div>
  );
};
