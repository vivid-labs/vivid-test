import { Dispatch } from "react";

export const StatusButton = ({
  override,
  status,
  statusHandler,
}: {
  override?: any;
  status: boolean;
  statusHandler: Dispatch<React.SetStateAction<boolean>>;
}) => {
  switch (status) {
    case false:
      return (
        <button
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
          onClick={() => statusHandler(true)}
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
        </button>
      );
    case true:
      return (
        <button
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
          onClick={() => {
            statusHandler(!status);
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
        </button>
      );
    default:
      return null;
  }
};
