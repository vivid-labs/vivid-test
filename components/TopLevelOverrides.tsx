import { Square } from "./Square";
import { AutolayoutSquare } from "./AutolayoutSquare";
export const TopLevelOverrides = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden relative w-full h-[1068px] bg-[rgb(74,_74,_74)]"
      style={override}
    >
      <div className="overflow-hidden flex items-center gap-[62px] px-[54px] py-[46px] absolute w-[1470px] left-[50px] top-[116px] bg-white">
        <Square
          override={{
            height: "166px",
            width: "168px",
          }}
        />
        <Square
          override={{
            rotate: "-10.0deg",
          }}
        />
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
      <div className="overflow-hidden flex items-center gap-10 px-[50px] py-[75px] absolute w-[1718px] left-[50px] h-[228px] top-[476px] bg-[rgb(198,_195,_195)]">
        <AutolayoutSquare
          override={{
            height: "fit-content",
            width: "fit-content",
            justifyContent: "center",
            alignItems: "center",
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
            backgroundColor: "rgb(0, 255, 26)",
            height: "115px",
            width: "fit-content",
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
            padding: "50px",
            height: "115px",
            width: "fit-content",
          }}
        />
        <div className="relative w-[139px] h-[115px]">
          <AutolayoutSquare
            override={{
              height: "115px",
              width: "fit-content",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "absolute",
              top: "0.5px",
              left: "0px",
            }}
          />
        </div>
        <div className="relative w-[139px] h-[115px]">
          <AutolayoutSquare
            override={{
              height: "115px",
              width: "fit-content",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              position: "absolute",
              top: "0.5px",
              left: "0px",
            }}
          />
        </div>
        <AutolayoutSquare
          override={{
            height: "115px",
            width: "139px",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
          }}
        />
      </div>
    </div>
  );
};
