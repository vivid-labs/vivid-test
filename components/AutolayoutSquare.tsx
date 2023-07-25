export const AutolayoutSquare = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
        padding: "10px",
        position: "relative",
        height: "115px",
        backgroundColor: "rgb(0, 240, 255)",
        ...override,
      }}
      figma-id="1224:1338"
    >
      <div
        style={{
          overflow: "hidden",
          width: "33px",
          height: "15px",
          flexShrink: 0,
          backgroundColor: "rgb(255, 255, 255)",
          position: "relative",
        }}
        figma-id="1224:1339"
      />
      <div
        style={{
          overflow: "hidden",
          width: "33px",
          height: "15px",
          flexShrink: 0,
          backgroundColor: "rgb(255, 255, 255)",
          position: "relative",
        }}
        figma-id="1224:1340"
      />
      <div
        style={{
          overflow: "hidden",
          width: "33px",
          height: "15px",
          flexShrink: 0,
          backgroundColor: "rgb(255, 255, 255)",
          position: "relative",
        }}
        figma-id="1224:1341"
      />
    </div>
  );
};
