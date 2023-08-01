import frame from "./frame.svg";
export const Feature = ({
  override,
  heading,
  description,
}: {
  override?: any;
  heading: string;
  description: string;
}) => {
  return (
    <div
      className="flex flex-col items-start pt-[0rem] px-[0rem] pb-px relative"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "fit-content",
        width: "fit-content",
        padding: "0px 0px 1px",
        position: "relative",
        ...override,
      }}
    >
      <div
        className="flex flex-col items-start gap-[7px] pt-[0rem] pr-[103.53px] pb-0.5 pl-[0rem] relative flex-shrink-0"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "7px",
          height: "fit-content",
          width: "fit-content",
          padding: "0px 103.53px 2px 0px",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          className="overflow-hidden relative w-4 h-4 flex-shrink-0"
          style={{
            overflow: "hidden",
            position: "relative",
            width: "16px",
            height: "16px",
            flexShrink: 0,
          }}
        >
          <img
            className="absolute w-4 h-4 top-[0rem]"
            src={frame.src}
            style={{
              position: "absolute",
              width: "16px",
              left: "calc(50% - 8px)",
              height: "16px",
              top: "0px",
            }}
          />
        </div>
        <p
          className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-[15px] font-black tracking-[0.06px] leading-[19px]"
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "rgb(18, 18, 18)",
            fontSize: "15px",
            fontWeight: 900,
            letterSpacing: "0.06px",
            lineHeight: "19px",
          }}
        >
          {heading}
        </p>
      </div>
      <div
        className="flex items-start pl-[0rem] pr-[35.53px] py-[0rem] relative w-full flex-shrink-0"
        style={{
          display: "flex",
          alignItems: "flex-start",
          height: "fit-content",
          padding: "0px 35.53px 0px 0px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <p
          className="flex flex-col justify-center text-[rgb(18,_18,_18)] text-[15px] font-normal tracking-[0.1px] leading-[19px]"
          style={{
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "rgb(18, 18, 18)",
            fontSize: "15px",
            fontWeight: 400,
            letterSpacing: "0.1px",
            lineHeight: "19px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
