import { AutolayoutSquare } from "./AutolayoutSquare";
export const AutolayoutComponentOverrides = ({
  override,
}: {
  override?: any;
}) => {
  const autolayoutSquareProps = [
    {
      override: {
        height: "fit-content",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      },
      "figma-id": "6:1224:1342",
    },
    {
      override: {
        height: "115px",
        width: "fit-content",
        position: "relative",
      },
      "figma-id": "6:1224:1358",
    },
    {
      override: {
        backgroundColor: "rgb(0, 255, 26)",
        height: "115px",
        width: "fit-content",
        position: "relative",
      },
      "figma-id": "6:1224:1362",
    },
    {
      override: {
        gap: "48px",
        height: "115px",
        width: "fit-content",
        position: "relative",
      },
      "figma-id": "6:1224:1366",
    },
    {
      override: {
        padding: "50px",
        height: "115px",
        width: "fit-content",
        position: "relative",
      },
      "figma-id": "6:1224:1370",
    },
  ];
  return (
    <div
      style={override}
      className="overflow-hidden flex items-center gap-10 px-[50px] py-[75px] relative w-full h-[14.25rem] flex-shrink-0 bg-[rgb(198,_195,_195)]"
      figma-id="6:1224:1326"
    >
      {autolayoutSquareProps.map((props, i) => (
        <AutolayoutSquare {...props} key={i} />
      ))}
      <div
        className="relative w-[139px] h-[115px] flex-shrink-0"
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
      <div
        className="relative w-[139px] h-[115px] flex-shrink-0"
        figma-id="6:1245:748"
      >
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
          figma-id="6:1245:749"
        />
      </div>
      <AutolayoutSquare
        override={{
          gap: "49px",
          height: "115px",
          width: "139px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "visible",
        }}
        figma-id="6:1224:1378"
      />
    </div>
  );
};
