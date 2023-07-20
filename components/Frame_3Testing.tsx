export const Frame_3Testing = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "161px",
        flexShrink: 0,
        borderStyle: "solid",
        borderColor: "rgb(231, 18, 18)",
        borderWidth: "3px",
        background:
          "linear-gradient(rgb(0, 0, 0, 0.20), rgb(0, 0, 0, 0.20)), linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
        ...override,
      }}
      figma-id="3:1962:975"
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
          fontSize: "24px",
          fontFamily: "Inter",
          fontWeight: 900,
        }}
        figma-id="3:1976:888"
      >
        new text
      </p>
      <p>This is a developer-added div</p>
      <h1>Another div</h1>
    </div>
  );
};
