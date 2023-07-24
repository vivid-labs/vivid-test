import avatarPlaceholder from "./avatarPlaceholder.png";
export const Avatar_1 = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "120px",
        height: "120px",
        ...override,
      }}
      figma-id="7:1379:1352"
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
          borderRadius: "100px",
        }}
        src={avatarPlaceholder.src}
        figma-id="7:1379:1351"
      />
    </div>
  );
};
