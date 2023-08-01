export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "8px",
        height: "5px",
        ...override,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "0%",
          right: "75%",
          width: "25%",
          top: "0%",
          bottom: "60%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "75%",
          right: "0%",
          width: "25%",
          top: "0%",
          bottom: "60%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "37.5%",
          right: "37.5%",
          width: "25%",
          top: "0%",
          bottom: "60%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "0%",
          right: "75%",
          width: "25%",
          top: "60%",
          bottom: "0%",
          height: "40%",
          backgroundColor: "rgb(160, 160, 160)",
          borderRadius: "50%",
        }}
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
      />
    </div>
  );
};
