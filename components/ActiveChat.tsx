import { ProfilePicture } from "./ProfilePicture";
export const ActiveChat = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        height: "fit-content",
        padding: "12px",
        position: "relative",
        width: "100%",
        borderStyle: "solid",
        borderColor: "rgb(242, 242, 242)",
        borderBottomWidth: "1px",
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
      figma-id="[object Object]:1:9"
    >
      <ProfilePicture figma-id="[object Object]:1:62" />
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
        figma-id="[object Object]:1:23"
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
          figma-id="[object Object]:1:16"
        >
          Name
        </p>
        <p
          style={{
            color: "rgb(193, 193, 193)",
            fontSize: "10px",
            fontFamily: "Avenir",
            fontWeight: 400,
          }}
          figma-id="[object Object]:1:13"
        >
          Last chat
        </p>
      </div>
    </div>
  );
};
