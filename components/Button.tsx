export const Button = ({
  override,
  size,
  hover,
}: {
  override?: any;
  size: string;
  hover: string;
}) => {
  const buttonSize =
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
        };
  const buttonDivHover =
    hover === "True"
      ? {
          opacity: "0.5",
        }
      : {};
  if (size === "Large" && hover === "False") {
    return null;
  }
  return (
    <div
      style={{
        ...buttonSize,
        ...buttonDivHover,
        ...override,
      }}
      className="overflow-hidden flex justify-center items-center gap-[10px] rounded-[4px] relative bg-[rgb(0,_129,_225)]"
      figma-id="34:3574"
    >
      <p
        className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-semibold"
        figma-id="34:3575"
      >
        Button
      </p>
    </div>
  );
};
