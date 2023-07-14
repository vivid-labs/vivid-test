import { ProfilePicture } from "./ProfilePicture";
export const ActiveChat = ({
  override,
  name,
  lastChat,
}: {
  override?: any;
  name: string;
  lastChat: string;
}) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        height: "fit-content",
        padding: "12px",
        position: "relative",
        width: "309px",
        borderStyle: "solid",
        borderColor: "rgb(242, 242, 242)",
        borderBottomWidth: "1px",
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
      figma-id="1:9"
    >
      <ProfilePicture />
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
        figma-id="1:23"
      >
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            flexShrink: 0,
            color: "rgb(72, 72, 72)",
            fontSize: "14px",
            fontFamily: "Avenir",
            fontWeight: 400,
          }}
          figma-id="1:16"
        >
          {name}
        </p>
        <p
          style={{
            width: "83px",
            height: "19px",
            flexShrink: 0,
            color: "rgb(193, 193, 193)",
            fontSize: "10px",
            fontFamily: "Avenir",
            fontWeight: 400,
          }}
          figma-id="1:13"
        >
          {lastChat}
        </p>
      </div>
    </div>
  );
};
