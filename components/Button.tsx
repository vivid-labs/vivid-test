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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        padding: "20px 50px",
        borderRadius: "7px",
        position: "relative",
        ...buttonColor,
        ...override,
      }}
      figma-id="4:6:302"
    >
      <p
        style={startToExploreColor}
        className={styles.startToExplore}
        figma-id="4:6:303"
      >
        Start to explore
      </p>
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
