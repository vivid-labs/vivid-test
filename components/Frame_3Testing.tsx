export const Frame_3Testing = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
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
      <p
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(255, 255, 255)",
          fontSize: "40px",
          fontFamily: "Inter",
          fontWeight: 900,
        }}
        onClick={() => console.log("hello")}
        figma-id="3:1976:888"
      >
        new text
      </p>
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
