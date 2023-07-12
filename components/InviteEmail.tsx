import group_1 from "./group_1.svg";
export const InviteEmail = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        padding: "6px",
        borderRadius: "5px",
        position: "relative",
        backgroundColor: "rgb(244, 86, 154)",
        ...override,
      }}
      figma-id="29:800"
    >
      <p
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "121px",
          height: "14px",
          flexShrink: 0,
          color: "rgb(255, 255, 255)",
          fontSize: "15px",
          fontFamily: "Avenir",
          fontWeight: 500,
        }}
        figma-id="29:791"
      >
        jorge@vivid.lol
      </p>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
          borderRadius: "8px",
          position: "relative",
          width: "16px",
          height: "16px",
          flexShrink: 0,
          backgroundColor: "rgb(175, 51, 105)",
        }}
        figma-id="29:795"
      >
        <img
          src={group_1.src}
          style={{
            width: "8.4px",
            height: "7.64px",
            flexShrink: 0,
          }}
          figma-id="29:798"
        />
      </div>
    </div>
  );
};
