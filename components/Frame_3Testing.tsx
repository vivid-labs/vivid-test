export const Frame_3Testing = ({
  override,
  showNewText,
  text,
}: {
  override?: any;
  showNewText: boolean;
  text: string;
}) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "326px",
        height: "161px",
        borderStyle: "solid",
        borderColor: "rgb(231, 18, 18)",
        borderWidth: "3px",
        background:
          "linear-gradient(rgb(0, 0, 0, 0.20), rgb(0, 0, 0, 0.20)), linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
        ...override,
      }}
      figma-id="3:1976:889"
    >
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          width: "86px",
          left: "227px",
          height: "75px",
          top: "72px",
          borderStyle: "solid",
          borderColor: "rgb(0, 0, 0)",
          borderWidth: "4px",
          backgroundColor: "rgb(255, 255, 255)",
        }}
        figma-id="3:1978:893"
      >
        <p
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "rgb(231, 18, 18)",
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: 800,
          }}
          figma-id="3:1978:894"
        >
          Tree
        </p>
      </div>
      {showNewText ? (
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "rgb(32, 17, 121)",
            fontSize: "40px",
            fontFamily: "Inter",
            fontWeight: 900,
          }}
          figma-id="3:1976:888"
        >
          {text}
        </p>
      ) : null}
      <p
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(255, 255, 255)",
          fontSize: "20px",
          fontFamily: "Inter",
          fontWeight: 200,
        }}
        figma-id="3:1978:892"
      >
        Other text
      </p>
    </div>
  );
};
