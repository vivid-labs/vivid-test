export const Button = ({
  override,
  color,
}: {
  override?: any;
  color: string;
}) => {
  const startToExploreColor =
    color === "White"
      ? {
          color: "rgb(13, 17, 20)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const buttonColor =
    color === "White"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(32, 35, 38)",
        };
  return (
    <div
      style={{
        ...buttonColor,
        ...override,
      }}
      className="flex justify-center items-center gap-[10px] px-[50px] py-[20px] rounded-[7px] relative"
      figma-id="5:6:302"
    >
      <p
        style={startToExploreColor}
        className="whitespace-nowrap text-center text-[20px] font-[Quicksand] font-semibold tracking-[-0.03em]"
        figma-id="5:6:303"
      >
        Start to explore
      </p>
    </div>
  );
};
