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
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                borderColor: "rgb(0, 0, 0)",
                overflow: "visible",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(30, 30, 30)",
          }}
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
              fontWeight: 400,
            }}
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
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
                top: "2px",
                left: "calc(50% - 4px)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(24, 24, 27)",
          }}
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
              fontWeight: 400,
            }}
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
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
                top: "3px",
                left: "calc(50% - 4px)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(30, 30, 30)",
          }}
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
              fontWeight: 400,
            }}
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
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
                top: "3px",
                left: "calc(50% - 4px)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            padding: "4px 10px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            backgroundColor: "rgb(24, 24, 27)",
          }}
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
              fontWeight: 400,
            }}
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
