export const ProfilePicture = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        position: "relative",
        ...override,
      }}
      figma-id="[object Object]:1:57"
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
        figma-id="[object Object]:1:160"
      />
    </div>
  );
};
