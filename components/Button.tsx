export const Button = ({
  override,
  type,
  text,
}: {
  override?: any;
  type: string;
  text: string;
}) => {
  const buttonType =
    type === "Primary"
      ? {
          backgroundColor: "rgb(244, 86, 154)",
        }
      : {
          backgroundColor: "rgb(0, 0, 0)",
        };
  return (
    <div
      style={{
        ...buttonType,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        padding: "8px 16px",
        borderRadius: "5px",
        position: "relative",
        boxShadow:
          "0px 4px 9px  rgb(0, 0, 0, 0.05), 0px 1.54px 2.87px  rgb(0, 0, 0, 0.07), 0px 0.33px 0.73px  rgb(0, 0, 0, 0.12)",
        ...override,
      }}
      figma-id="1:1204"
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
          flexShrink: 0,
          color: "rgb(255, 205, 41)",
          fontSize: "16px",
          fontFamily: "Avenir",
          fontWeight: 500,
          letterSpacing: "0.01px",
          lineHeight: "23px",
        }}
        figma-id="1:257"
      >
        {text}
      </p>
    </div>
  );
};
