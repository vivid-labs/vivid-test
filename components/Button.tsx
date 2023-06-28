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
        ...buttonColor,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "20px",
        paddingBottom: "20px",
        borderRadius: "7px",
        position: "relative",
        ...override,
      }}
    >
      <p
        style={{
          ...startToExploreColor,
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          flexShrink: 0,
          fontSize: "20px",
          fontFamily: "Quicksand",
          fontWeight: 600,
          letterSpacing: "-0.03em",
        }}
      >
        Start to explore
      </p>
    </div>
  );
};
