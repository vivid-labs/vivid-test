import { FormField } from "./FormField";
import { Button } from "./Button";
export const Frame_2 = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
        height: "fit-content",
        padding: "24px",
        borderRadius: "14px",
        position: "relative",
        boxShadow: "0px 4px 10px 4px rgb(0, 0, 0, 0.15)",
        width: "100%",
        flexShrink: 0,
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
      figma-id="255:216"
    >
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          height: "fit-content",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
        figma-id="255:217"
      >
        <p
          style={{
            height: "fit-content",
            textAlign: "center",
            flexShrink: 0,
            flex: "1 1 0%",
            minWidth: "0px",
            color: "rgb(244, 86, 154)",
            fontSize: "30px",
            fontFamily: "Avenir",
            fontWeight: 900,
          }}
          figma-id="255:218"
        >
          Get started with Vivid Teams!
        </p>
      </div>
      <FormField
        type="TextInput"
        field="Company Name"
        placeholder="Pied Piper"
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <FormField
        type="Select"
        field="CSS Solution"
        placeholder="Select one"
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
      <Button
        type="Primary"
        text="Start my free trial!"
        override={{
          height: "fit-content",
          width: "100%",
        }}
      />
    </div>
  );
};
