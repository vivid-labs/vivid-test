export const Link = ({
  override,
  linkText,
}: {
  override?: any;
  linkText: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        width: "fit-content",
        height: "fit-content",
        position: "relative",
        ...override,
      }}
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          flexShrink: 0,
          color: "rgb(255, 255, 255)",
          fontSize: "15px",
          fontFamily: "Quicksand",
          fontWeight: 500,
        }}
      >
        {linkText}
      </p>
    </div>
  );
};
