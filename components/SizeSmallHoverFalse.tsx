export const SizeSmallHoverFalse = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        height: "fit-content",
        padding: "5px 10px",
        borderRadius: "4px",
        position: "relative",
        backgroundColor: "rgb(222, 136, 88)",
        ...override,
      }}
      figma-id="1282:867"
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(255, 255, 255)",
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: 600,
        }}
        figma-id="1282:868"
      >
        Button
      </p>
    </div>
  );
};
