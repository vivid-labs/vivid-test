import { DragHandle } from "./DragHandle";
import { Delete } from "./Delete";
export const ComponentCard = ({
  override,
  colors,
  size,
  draggable,
  instance,
  text,
}: {
  override?: any;
  colors: string;
  size: string;
  draggable: boolean;
  instance: any;
  text: string;
}) => {
  if (colors === "Figma" && size === "Small") {
    return (
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "fit-content",
          width: "fit-content",
          borderRadius: "2px",
          position: "relative",
          borderStyle: "solid",
          borderColor: "rgb(68, 68, 68)",
          borderWidth: "1px",
          backgroundColor: "rgb(68, 68, 68)",
          ...override,
        }}
        figma-id="12:30"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            padding: "2px 5px 4px",
            position: "relative",
            width: "100%",
            height: "75px",
            flexShrink: 0,
          }}
          figma-id="31:4130"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "relative",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(30, 30, 30)",
          }}
          figma-id="13:29"
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(255, 255, 255)",
              fontSize: "12px",
              fontFamily: "Inter",
              fontWeight: 400,
            }}
            figma-id="13:60"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Small") {
    return (
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "fit-content",
          width: "fit-content",
          borderRadius: "2px",
          position: "relative",
          borderStyle: "solid",
          borderColor: "rgb(63, 63, 70)",
          borderWidth: "1px",
          backgroundColor: "rgb(63, 63, 70)",
          ...override,
        }}
        figma-id="36:1218"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 5px",
            position: "relative",
            width: "100%",
            height: "75px",
            flexShrink: 0,
          }}
          figma-id="36:1220"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(24, 24, 27)",
          }}
          figma-id="36:1222"
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(250, 250, 250)",
              fontSize: "12px",
              fontFamily: "Inter",
              fontWeight: 400,
            }}
            figma-id="36:1223"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Figma" && size === "Large") {
    return (
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "fit-content",
          width: "fit-content",
          borderRadius: "2px",
          position: "relative",
          borderStyle: "solid",
          borderColor: "rgb(68, 68, 68)",
          borderWidth: "1px",
          backgroundColor: "rgb(68, 68, 68)",
          ...override,
        }}
        figma-id="38:1829"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 5px",
            position: "relative",
            width: "100%",
            height: "88px",
            flexShrink: 0,
          }}
          figma-id="38:1831"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(30, 30, 30)",
          }}
          figma-id="38:1833"
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(255, 255, 255)",
              fontSize: "12px",
              fontFamily: "Inter",
              fontWeight: 400,
            }}
            figma-id="38:1834"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Large") {
    return (
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "fit-content",
          width: "fit-content",
          borderRadius: "2px",
          position: "relative",
          borderStyle: "solid",
          borderColor: "rgb(63, 63, 70)",
          borderWidth: "1px",
          backgroundColor: "rgb(63, 63, 70)",
          ...override,
        }}
        figma-id="38:1836"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 5px",
            position: "relative",
            width: "100%",
            height: "88px",
            flexShrink: 0,
          }}
          figma-id="38:1838"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(24, 24, 27)",
          }}
          figma-id="38:1840"
        >
          <p
            style={{
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(250, 250, 250)",
              fontSize: "12px",
              fontFamily: "Inter",
              fontWeight: 400,
            }}
            figma-id="38:1841"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
