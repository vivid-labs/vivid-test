export const MessageWrapper = ({
  override,
  from,
  message,
}: {
  override?: any;
  from: string;
  message: string;
}) => {
  const messageFrom =
    from === "Me"
      ? {
          backgroundColor: "rgb(69, 141, 247)",
        }
      : {
          backgroundColor: "rgb(72, 72, 72)",
        };
  const messageWrapperFrom =
    from === "Me"
      ? {
          alignItems: "flex-end",
        }
      : {
          alignItems: "flex-start",
        };
  return (
    <div
      style={{
        ...messageWrapperFrom,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        width: "877px",
        height: "60px",
        ...override,
      }}
      figma-id="1:199"
    >
      <div
        style={{
          ...messageFrom,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "10px",
          width: "fit-content",
          height: "fit-content",
          padding: "8px 20px",
          borderRadius: "100px",
          position: "relative",
          flexShrink: 0,
        }}
        figma-id="1:195"
      >
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexShrink: 0,
            color: "rgb(255, 255, 255)",
            fontSize: "16px",
            fontFamily: "Avenir",
            fontWeight: 400,
          }}
          figma-id="1:203"
        >
          {message}
        </p>
      </div>
    </div>
  );
};
