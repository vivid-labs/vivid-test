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
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
        };
  if (size === "Large") {
    return null;
  }
  return (
    <button
      style={{
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
        ...buttonSize,
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
          color: "rgb(39, 39, 42)",
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: 800,
        }}
        figma-id="3:34:3575"
      >
        {text}
        Button
      </p>
    </button>
  );
};
