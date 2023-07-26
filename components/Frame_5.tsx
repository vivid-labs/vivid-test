import { AutolayoutSquare } from "./AutolayoutSquare";
export const Frame_5 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="relative w-full h-[115px] flex-shrink-0"
      figma-id="6:1245:747"
    >
      <AutolayoutSquare
        override={{
          width: "fit-content",
          height: "115px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "absolute",
          top: "0.5px",
          left: "0px",
        }}
        figma-id="6:1224:1374"
      />
    </div>
  );
};
