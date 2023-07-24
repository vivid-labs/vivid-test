export const Tab = ({
  override,
  status,
}: {
  override?: any;
  status: string;
}) => {
  const tabStatus =
    status === "Success"
      ? {
          backgroundColor: "rgb(48, 170, 17)",
        }
      : {
          backgroundColor: "rgb(195, 46, 46)",
        };
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "12px",
        position: "relative",
        width: "110px",
        height: "83px",
        backgroundColor: "rgb(48, 170, 17)",
        ...tabStatus,
        ...override,
      }}
      figma-id="5:170:67"
    >
      <div
        style={{
          position: "absolute",
          width: "64px",
          left: "23px",
          height: "64px",
          top: "9px",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "50%",
        }}
        figma-id="5:170:68"
      />
    </div>
  );
};
