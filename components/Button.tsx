export const Button = ({
  override,
  size,
  callback,
}: {
  override?: any;
  size: string;
  callback: () => void;
}) => {
  const buttonSize =
    size === "Small" ? { padding: "5px 10px" } : { padding: "10px 15px" };

  if (size === "Large") {
    return null;
  }
  return (
    <button
      style={{
        ...buttonSize,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        borderRadius: "4px",
        position: "relative",
        backgroundColor: "rgb(222, 136, 88)",
        ...override,
      }}
      figma-id="3:34:3574"
    >
      <p
        onClick={callback}
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
          fontWeight: 800,
        }}
        figma-id="3:34:3575"
      >
        Button
      </p>
    </button>
  );
};
