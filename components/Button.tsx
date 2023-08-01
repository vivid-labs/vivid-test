export const Button = ({
  override,
  size,
  hover,
  text,
}: {
  override?: any;
  size: string;
  hover: string;
  text: string;
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
      className="overflow-hidden flex justify-center items-center rounded relative bg-[rgb(222,_136,_88)]"
      style={{
        ...buttonSize,
        ...buttonDivHover,
        ...override,
      }}
    >
      <p className="whitespace-nowrap text-center flex flex-col justify-center text-zinc-800 text-xs font-extrabold">
        {text}
      </p>
    </div>
  );
};
