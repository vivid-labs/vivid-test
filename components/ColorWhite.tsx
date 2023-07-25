export const ColorWhite = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        height: "fit-content",
        padding: "20px 50px",
        borderRadius: "7px",
        position: "relative",
        backgroundColor: "rgb(255, 33, 33)",
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
          color: "rgb(13, 17, 20)",
          fontSize: "20px",
          fontFamily: "Quicksand",
          fontWeight: 600,
          letterSpacing: "-0.03em",
        }}
        figma-id="4:6:303"
      >
        Start to explore
      </p>
    </div>
  );
};
