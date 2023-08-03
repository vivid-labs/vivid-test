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
      className="flex items-center justify-center overflow-hidden rounded bg-[rgb(0,_129,_225)]"
      style={{
        ...buttonDifferentLayerNamesSize,
        ...buttonDifferentLayerNamesDivHover,
        ...override,
      }}
    >
      <p className="whitespace-nowrap text-xs font-semibold text-white">
        Button
      </p>
    </div>
  );
};
