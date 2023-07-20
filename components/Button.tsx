export const Button = ({
  override,
  size,
  hover,
}: {
  override?: any;
  size: string;
  hover: string;
}) => {
  const buttonSize =
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
        };
  const buttonDivHover =
    hover === "True"
      ? {
          opacity: "0.5",
        }
      : {};
  if (size === "Large" && hover === "False") {
    return null;
  }
  return (
    <div
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
        backgroundColor: "rgb(0, 129, 225)",
        ...buttonSize,
        ...buttonDivHover,
        ...override,
      }}
      figma-id="3:34:3574"
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
          fontWeight: 800,
        }}
        figma-id="3:34:3575"
      >
        Button
      </p>
    </div>
  );
};
