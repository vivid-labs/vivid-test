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
        alignItems: "flex-start",
        width: "fit-content",
        height: "fit-content",
        position: "relative",
        ...override,
      }}
      figma-id="10:6:329"
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          color: "rgb(255, 255, 255)",
          fontSize: "15px",
          fontFamily: "Quicksand",
          fontWeight: 500,
        }}
        figma-id="10:6:330"
      >
        {linkText}
      </p>
    </div>
  );
};
