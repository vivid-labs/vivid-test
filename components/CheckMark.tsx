import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        width: "40.63px",
        height: "40.63px",
        ...override,
      }}
      figma-id="29:532"
    >
      <img
        src={group.src}
        style={{
          width: "100%",
          flexShrink: 0,
          flex: "1 1 0%",
          minHeight: "0px",
        }}
        figma-id="12:97"
      />
    </div>
  );
};
