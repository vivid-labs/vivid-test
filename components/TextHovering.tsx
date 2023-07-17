export const TextHovering = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  const buttonProperty_1 =
    property_1 === "default"
      ? {
          color: "rgb(96, 96, 96)",
        }
      : {
          color: "rgb(239, 121, 12)",
        };
  return (
    <div
      style={override}
      className="flex flex-col items-start gap-[10px] px-[8px] py-[5px] relative"
      figma-id="1201:7004"
    >
      <div
        className="flex items-center gap-2 relative flex-shrink-0"
        figma-id="1201:7005"
      >
        <p
          style={buttonProperty_1}
          className="whitespace-nowrap flex flex-col justify-center text-[16px] font-[Montserrat] font-normal tracking-[-0.03em] leading-[1.5em]"
          figma-id="1201:7006"
        >
          button
        </p>
      </div>
      <div
        className="opacity-0 absolute w-px left-[9px] h-px top-5 bg-[rgb(239,_121,_12)] rounded-[1px]"
        figma-id="1201:7007"
      />
    </div>
  );
};
