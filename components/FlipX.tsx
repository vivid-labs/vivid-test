import flipX from "./flipX.png";
export const FlipX = ({ override }: { override?: any }) => {
  return (
    <img
      style={{
        transform: "scale(-100%, 100%)",
        transformOrigin: "top left",
        width: "100%",
        height: "27.45px",
        flexShrink: 0,
        objectFit: "cover",
        ...override,
      }}
      src={flipX.src}
      figma-id="3:1585:934"
    />
  );
};
