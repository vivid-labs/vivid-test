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
    >
      <img
        style={{
          position: "absolute",
          left: "0%",
          right: "0%",
          width: "100%",
          top: "0%",
          bottom: "0%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "6px",
        }}
        src={image.src}
      />
    </div>
  );
};
