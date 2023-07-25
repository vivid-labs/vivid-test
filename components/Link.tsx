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
        width: "100%",
        height: "fit-content",
        position: "relative",
        ...override,
      }}
      figma-id="4:6:329"
    >
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          color: "rgb(255, 0, 0)",
          fontSize: "15px",
          fontFamily: "Quicksand",
          fontWeight: 500,
        }}
        figma-id="4:6:330"
      >
        Default
        {linkText}
      </p>
    </div>
  );
};
