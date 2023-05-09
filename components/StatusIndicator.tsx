export const StatusIndicator = ({ status }: { status: string }) => {
  const status_0 = {
    Implemented: "20px",
    New: "85px",
    Local: "150px",
  }[status];

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "start",
        width: "fit-content",
        height: "fit-content",
        borderRadius: "6px",
        position: "absolute",
        top: "20px",
        left: status_0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "9px",
          height: "9px",
          background: "",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(60, 157, 93)",
            position: "absolute",
            left: "calc(0%)",
            right: "calc(0%)",
            width: "calc(100%)",
            top: "calc(0%)",
            bottom: "calc(0%)",
            height: "calc(100%)",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};
