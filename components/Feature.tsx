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
        ...override,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "7px",
          height: "fit-content",
          width: "fit-content",
          padding: "0px 104px 2px 0px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "16px",
            height: "16px",
            flexShrink: 0,
          }}
        >
          <img
            src={frame.src}
            style={{
              position: "absolute",
              width: "16px",
              left: "calc(50% - 8px)",
              height: "16px",
              top: "0px",
            }}
          />
        </div>
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            color: "rgb(18, 18, 18)",
            fontSize: "15px",
            fontWeight: 900,
            letterSpacing: "0.06px",
            lineHeight: "19px",
          }}
        >
          {heading}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          height: "fit-content",
          padding: "0px 36px 0px 0px",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            height: "fit-content",
            color: "rgb(18, 18, 18)",
            fontSize: "15px",
            fontWeight: 400,
            letterSpacing: "0.1px",
            lineHeight: "19px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
