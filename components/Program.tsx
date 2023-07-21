import group_10 from "./group_10.svg";
export const Program = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "5px",
        position: "relative",
        width: "32px",
        height: "32px",
        ...override,
      }}
      figma-id="4:6:321"
    >
      <div figma-id="4:6:322">
        <img
          src={group_10.src}
          style={{
            position: "absolute",
            left: "4px",
            right: "-4px",
            width: "auto",
            top: "6.23px",
            bottom: "-6.23px",
            height: "auto",
          }}
          figma-id="4:6:323"
        />
      </div>
    </div>
  );
};
