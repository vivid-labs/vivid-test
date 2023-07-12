import frame from "./frame.svg";
export const Feature = ({
  override,
  heading,
  description,
}: {
  override?: any;
  heading: string;
  description: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "fit-content",
        width: "fit-content",
        padding: "0px 0px 1px",
        position: "relative",
        ...override,
      }}
      figma-id="1:1178"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "7px",
          height: "fit-content",
          width: "fit-content",
          padding: "0px 103.53px 2px 0px",
          position: "relative",
          flexShrink: 0,
        }}
        figma-id="1:232"
      >
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "16px",
            height: "16px",
            flexShrink: 0,
          }}
          figma-id="1:233"
        >
          <img
            src={frame.src}
            style={{
              position: "absolute",
              width: "16px",
              left: "calc(50% - 8px)",
              height: "16px",
            }}
            figma-id="1:234"
          />
        </div>
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexShrink: 0,
            color: "rgb(18, 18, 18)",
            fontSize: "15px",
            fontFamily: "Avenir",
            fontWeight: 900,
            letterSpacing: "0.06px",
            lineHeight: "19px",
          }}
          figma-id="1:236"
        >
          {heading}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          height: "fit-content",
          padding: "0px 35.53px 0px 0px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
        figma-id="1:237"
      >
        <p
          style={{
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexShrink: 0,
            flex: "1 1 0%",
            minWidth: "0px",
            color: "rgb(18, 18, 18)",
            fontSize: "15px",
            fontFamily: "Avenir",
            fontWeight: 400,
            letterSpacing: "0.1px",
            lineHeight: "19px",
          }}
          figma-id="1:238"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
