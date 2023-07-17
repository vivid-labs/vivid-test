export const BtnHovering_3 = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  const buttonProperty_1 =
    property_1 === "default"
      ? {
          color: "rgb(239, 121, 12)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const btnHovering_3Property_1 =
    property_1 === "default"
      ? {
          borderStyle: "solid",
          borderColor: "rgb(239, 121, 12)",
          borderWidth: "1px",
        }
      : {
          backgroundColor: "rgb(225, 108, 0)",
        };
  return (
    <div
      style={{
        ...btnHovering_3Property_1,
        ...override,
      }}
      className="flex justify-center items-center gap-2 px-[20px] py-[10px] rounded-[5px] relative"
      figma-id="1201:7026"
    >
      <p
        style={buttonProperty_1}
        className="whitespace-nowrap text-center text-[16px] font-[Montserrat] font-medium tracking-[-0.02em] leading-[1.5em]"
        figma-id="1201:7027"
      >
        button
      </p>
    </div>
  );
};
