export const ButtonDifferentLayerNames = ({
  override,
  size,
  hover,
}: {
  override?: any;
  size: string;
  hover: string;
}) => {
  const buttonDifferentLayerNamesSize =
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
        };
  const buttonDifferentLayerNamesDivHover =
    hover === "True"
      ? {
          opacity: "0.5",
        }
      : {};
  return (
    <div
      style={{
        ...buttonDifferentLayerNamesSize,
        ...buttonDifferentLayerNamesDivHover,
        ...override,
      }}
      className="overflow-hidden flex justify-center items-center gap-[10px] rounded-[4px] relative bg-[rgb(0,_129,_225)]"
      figma-id="3:1438:924"
    >
      <p
        className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-semibold"
        figma-id="3:1438:925"
      >
        Button
      </p>
    </div>
  );
};
