export const Button = ({
  override,
  color,
}: {
  override?: any;
  color: string;
}) => {
  const startToExploreColor =
    color === "White"
      ? {
          color: "rgb(13, 17, 20)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const buttonColor =
    color === "White"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(32, 35, 38)",
        };
  return (
    <div
      style={{
        width: "100%",
        ...buttonColor,
        ...override,
      }}
      figma-id="4:6:302"
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "Quicksand",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          ...startToExploreColor,
        }}
        figma-id="4:6:303"
      >
        Start to explore
      </p>
    </div>
  );
};
