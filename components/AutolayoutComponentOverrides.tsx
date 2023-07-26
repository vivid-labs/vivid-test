import { AutolayoutSquare } from "./AutolayoutSquare";
export const AutolayoutComponentOverrides = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex items-center gap-10 px-[50px] py-[75px] relative w-full h-[14.25rem] flex-shrink-0 bg-[rgb(198,_195,_195)]"
      figma-id="6:1224:1326"
    >
      <AutolayoutSquare figma-id="6:1224:1342" />
      <AutolayoutSquare figma-id="6:1224:1358" />
      <AutolayoutSquare figma-id="6:1224:1362" />
      <AutolayoutSquare figma-id="6:1224:1366" />
      <AutolayoutSquare figma-id="6:1224:1370" />
      <div
        className="relative w-[139px] h-[115px] flex-shrink-0"
        figma-id="6:1245:747"
      >
        <AutolayoutSquare figma-id="6:1224:1374" />
      </div>
      <div
        className="relative w-[139px] h-[115px] flex-shrink-0"
        figma-id="6:1245:748"
      >
        <AutolayoutSquare figma-id="6:1245:749" />
      </div>
      <AutolayoutSquare
        override={{
          overflow: "visible",
        }}
        figma-id="6:1224:1378"
      />
    </div>
  );
};
