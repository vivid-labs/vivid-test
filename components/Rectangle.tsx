export const Rectangle = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "5px",
        width: "100%",
        height: "fit-content",
        padding: "5px",
        borderRadius: "2px",
        position: "relative",
        flexShrink: 0,
        borderStyle: "solid",
        borderColor: "rgb(75, 75, 75)",
        borderWidth: "1px",
        backgroundColor: "rgb(15, 15, 15)",
        ...override,
      }}
      figma-id="3:2054:837"
    >
      <div
        style={{
          width: "10px",
          flexShrink: 0,
          backgroundColor: "rgb(191, 43, 43)",
        }}
        figma-id="3:2054:848"
      />
      <div
        style={{
          width: "10px",
          height: "37px",
          flexShrink: 0,
          backgroundColor: "rgb(57, 176, 97)",
        }}
        figma-id="3:2054:849"
      />
    </div>
  );
};
