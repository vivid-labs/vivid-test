import { Tab } from "./Tab";
import { StatusButton } from "./StatusButton";
import { useState } from "react";

export const StatusSuccess = ({ override }: { override?: any }) => {
  const [successState, setSuccessState] = useState(true);
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        height: "fit-content",
        padding: "24px",
        borderRadius: "24px",
        position: "relative",
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
      figma-id="5:170:87"
    >
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          height: "fit-content",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
        figma-id="5:170:61"
      >
        <p
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            textAlign: "center",
            color: "rgb(48, 170, 17)",
            fontSize: "32px",
            fontFamily: "Avenir",
            fontWeight: 800,
          }}
          figma-id="5:170:62"
        >
          This was a success!
        </p>
      </div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          height: "fit-content",
          padding: "7px 16px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
        figma-id="5:170:63"
      >
        <Tab
          status={successState ? "Success" : "Failure"}
          figma-id="5:170:69"
        />
        <Tab
          status={successState ? "Success" : "Failure"}
          figma-id="5:170:71"
        />
        <Tab
          status={successState ? "Success" : "Failure"}
          figma-id="5:170:73"
        />
      </div>
      <StatusButton
        status={successState}
        statusHandler={setSuccessState}
        figma-id="5:170:85"
      />
    </div>
  );
};
