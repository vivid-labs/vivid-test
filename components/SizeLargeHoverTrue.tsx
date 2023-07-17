export const SizeLargeHoverTrue = ({ override }: { override?: any }) => {
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
        padding: "10px 15px",
        borderRadius: "4px",
        position: "relative",
        opacity: "0.5",
        backgroundColor: "rgb(222, 136, 88)",
        ...override,
      }}
      figma-id="34:3574"
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
        figma-id="34:3575"
      >
        Button
      </p>
    </div>
  );
};
