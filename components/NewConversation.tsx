import group_1 from "./group_1.svg";
export const NewConversation = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        position: "relative",
        width: "100%",
        height: "71px",
        borderStyle: "solid",
        borderColor: "rgb(242, 242, 242)",
        borderBottomWidth: "1px",
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
      figma-id="5:19:87"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          height: "fit-content",
          width: "fit-content",
          position: "relative",
          flexShrink: 0,
        }}
        figma-id="5:19:79"
      >
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            color: "rgb(72, 72, 72)",
            fontSize: "14px",
            fontFamily: "Avenir",
            fontWeight: 400,
          }}
          figma-id="5:19:80"
        >
          Start a new conversation!
        </p>
      </div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 7px",
          borderRadius: "100px",
          position: "relative",
          width: "40px",
          height: "40px",
          flexShrink: 0,
          backgroundColor: "rgb(242, 242, 242)",
        }}
        figma-id="5:19:83"
      >
        <img
          src={group_1.src}
          style={{
            width: "18px",
            height: "18px",
            flexShrink: 0,
          }}
          figma-id="5:19:86"
        />
      </div>
    </div>
  );
};
