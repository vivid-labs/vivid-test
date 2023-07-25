export const ButtonDifferentLayerNames = ({
  override,
  size,
  hover,
}: {
  override?: any;
  size: string;
  hover: string;
}) => {
  const buttonDifferentLayerNamesSize =
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
        };
  const buttonDifferentLayerNamesDivHover =
    hover === "True"
      ? {
          opacity: "0.5",
        }
      : {};
  return (
    <div
      style={{
        ...buttonDifferentLayerNamesSize,
        ...buttonDifferentLayerNamesDivHover,
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
        ...override,
      }}
      figma-id="3:1438:924"
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
        figma-id="3:1438:925"
      >
        Button
      </p>
    </div>
  );
};
