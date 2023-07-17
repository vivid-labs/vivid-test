export const BtnHovering_2 = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  const btnHovering_2Property_1 =
    property_1 === "default"
      ? {
          backgroundColor: "rgb(239, 121, 12)",
        }
      : {
          backgroundColor: "rgb(225, 108, 0)",
        };
  return (
    <div
      style={{
        ...btnHovering_2Property_1,
        ...override,
      }}
      className="flex justify-center items-center gap-2 px-[20px] py-[10px] rounded-[5px] relative"
      figma-id="1201:7021"
    >
      <p
        className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[16px] font-[Montserrat] font-medium tracking-[-0.02em] leading-[1.5em]"
        figma-id="1201:7022"
      >
        button
      </p>
    </div>
  );
};
