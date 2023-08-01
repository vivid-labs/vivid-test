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
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        borderRadius: "4px",
        position: "relative",
        backgroundColor: "rgb(222, 136, 88)",
        ...override,
      }}
    >
      <p
        className="whitespace-nowrap text-center flex flex-col justify-center text-zinc-800 text-xs font-extrabold"
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(39, 39, 42)",
          fontSize: "12px",
          fontWeight: 800,
        }}
      >
        {text}
      </p>
    </div>
  );
};
