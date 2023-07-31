export const SplitPadding = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6px 8px 10px 4px",
        position: "relative",
        width: "100%",
        height: "30px",
        flexShrink: 0,
        backgroundColor: "rgb(191, 43, 43)",
        ...override,
      }}
      figma-id="3:561:1838"
    >
      <div
        style={{
          overflow: "hidden",
          width: "4px",
          height: "4px",
          flexShrink: 0,
          backgroundColor: "rgb(255, 255, 255)",
        }}
        figma-id="3:561:1839"
      />
      <div
        style={{
          overflow: "hidden",
          width: "4px",
          height: "4px",
          flexShrink: 0,
          backgroundColor: "rgb(255, 255, 255)",
        }}
        figma-id="3:561:1840"
      />
      <div
        style={{
          overflow: "hidden",
          width: "4px",
          height: "4px",
          flexShrink: 0,
          backgroundColor: "rgb(255, 255, 255)",
        }}
        figma-id="3:561:1841"
      />
    </div>
  );
};
