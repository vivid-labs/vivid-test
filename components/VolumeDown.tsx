import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({ override }: { override?: any }) => {
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
      figma-id="4:6:317"
    >
      <div figma-id="4:6:318">
        <img
          src={volumeDown.src}
          style={{
            position: "absolute",
            left: "4.63px",
            right: "-4.63px",
            width: "auto",
            top: "5.67px",
            bottom: "-5.67px",
            height: "auto",
          }}
          figma-id="4:6:319"
        />
      </div>
    </div>
  );
};
