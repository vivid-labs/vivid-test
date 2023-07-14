export const ProfilePicture = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        position: "relative",
        ...override,
      }}
      figma-id="1:57"
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "100px",
          width: "45px",
          height: "45px",
          flexShrink: 0,
          backgroundColor: "rgb(193, 193, 193)",
          position: "relative",
        }}
        figma-id="1:160"
      />
    </div>
  );
};
