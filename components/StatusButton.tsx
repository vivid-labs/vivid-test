export const StatusButton = ({
  override,
  status,
}: {
  override?: any;
  status: string;
}) => {
  switch (status) {
    case "Success":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            padding: "10px",
            borderRadius: "12px",
            position: "relative",
            backgroundColor: "rgb(48, 170, 17)",
            ...override,
          }}
          figma-id="5:170:77"
        >
          <p
            style={{
              textAlign: "center",
              color: "rgb(255, 255, 255)",
              fontSize: "32px",
              fontFamily: "Avenir",
              fontWeight: 800,
            }}
            figma-id="5:170:76"
          >
            Success!
          </p>
        </div>
      );
    case "Failure":
      return (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            padding: "10px",
            borderRadius: "12px",
            position: "relative",
            backgroundColor: "rgb(195, 46, 46)",
            ...override,
          }}
          figma-id="5:170:79"
        >
          <p
            style={{
              textAlign: "center",
              color: "rgb(255, 255, 255)",
              fontSize: "32px",
              fontFamily: "Avenir",
              fontWeight: 800,
            }}
            figma-id="5:170:80"
          >
            Failure!
          </p>
        </div>
      );
    default:
      return null;
  }
};
