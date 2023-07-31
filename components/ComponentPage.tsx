import { Component } from "./Component";
export const ComponentPage = ({ override }: { override?: any }) => {
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
      figma-id="3:756:1889"
    >
      <Component figma-id="3:1635:937" />
      <Component
        override={{
          borderWidth: "4px",
          borderColor: "rgb(105, 135, 240)",
          borderRadius: "10px",
          backgroundColor: "rgb(255, 18, 18)",
          boxShadow: "0px 4px 4px  rgb(0, 255, 71, 1.00)",
          rotate: "38.9deg",
          overflow: "visible",
        }}
        figma-id="3:1635:938"
      />
    </div>
  );
};
