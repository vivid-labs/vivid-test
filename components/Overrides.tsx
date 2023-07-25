import { Square } from "./Square";
import { AutolayoutSquare } from "./AutolayoutSquare";
export const Overrides = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "1068px",
        flexShrink: 0,
        backgroundColor: "rgb(74, 74, 74)",
        ...override,
      }}
      figma-id="1224:1382"
    >
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "62px",
          height: "fit-content",
          padding: "46px 54px",
          position: "absolute",
          width: "1470px",
          left: "50px",
          top: "116px",
          backgroundColor: "rgb(255, 255, 255)",
        }}
        figma-id="1224:1320"
      >
        <Square
          override={{
            height: "166px",
            width: "168px",
          }}
        />
        <Square />
        <Square
          override={{
            flex: "1 1 0%",
          }}
        />
        <Square
          override={{
            borderRadius: "24px",
          }}
        />
        <Square
          override={{
            borderWidth: "10px",
            borderColor: "rgb(9, 7, 7)",
          }}
        />
        <Square
          override={{
            backgroundColor: "rgb(64, 255, 129)",
          }}
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          padding: "75px 50px",
          position: "absolute",
          width: "1470px",
          left: "50px",
          height: "228px",
          top: "476px",
          backgroundColor: "rgb(198, 195, 195)",
        }}
        figma-id="1224:1326"
      >
        <AutolayoutSquare
          override={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <AutolayoutSquare />
        <AutolayoutSquare
          override={{
            backgroundColor: "rgb(0, 255, 26)",
          }}
        />
        <AutolayoutSquare
          override={{
            gap: "48px",
            height: "115px",
            width: "fit-content",
          }}
        />
        <AutolayoutSquare
          override={{
            height: "115px",
            width: "fit-content",
            padding: "50px",
          }}
        />
        <AutolayoutSquare
          override={{
            height: "115px",
            width: "fit-content",
          }}
        />
        <AutolayoutSquare
          override={{
            height: "115px",
            width: "139px",
            gap: "49px",
          }}
        />
      </div>
    </div>
  );
};
