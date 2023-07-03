import avatarPlaceholderImage from "./avatarPlaceholderImage.png";

export const Avatar_14 = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "120px",
        height: "120px",
        ...override,
      }}
    >
      <img
        style={{
          position: "absolute",
          right: "0%",
          width: "calc(100%)",
          bottom: "0%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
          borderRadius: "120px",
        }}
        src={avatarPlaceholderImage.src}
      />
    </div>
  );
};
