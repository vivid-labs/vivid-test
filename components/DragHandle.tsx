export const DragHandle = ({ override }: { override?: any }) => {
  const onClickHandler = () => {
    console.log("dragging");
  };
  return (
    <div
      style={{
        position: "relative",
        width: "8px",
        height: "5px",
        ...override,
      }}
      onClick={onClickHandler}
      figma-id="33:1183"
    >
      <div
        style={{
          position: "absolute",
          right: "75%",
          width: "25%",
          bottom: "60%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
        figma-id="33:1177"
      />
      <div
        style={{
          position: "absolute",
          left: "75%",
          right: "0%",
          width: "25%",
          bottom: "60%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
        figma-id="33:1179"
      />
      <div
        style={{
          position: "absolute",
          left: "37.5%",
          right: "37.5%",
          width: "25%",
          bottom: "60%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
        figma-id="33:1178"
      />
      <div
        style={{
          position: "absolute",
          right: "75%",
          width: "25%",
          top: "60%",
          bottom: "0%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
        figma-id="33:1180"
      />
      <div
        style={{
          position: "absolute",
          left: "75%",
          right: "0%",
          width: "25%",
          top: "60%",
          bottom: "0%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
        figma-id="33:1181"
      />
      <div
        style={{
          position: "absolute",
          left: "37.5%",
          right: "37.5%",
          width: "25%",
          top: "60%",
          bottom: "0%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
        figma-id="33:1182"
      />
    </div>
  );
};
