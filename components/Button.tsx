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
      className="flex flex-row justify-center items-center gap-[10px] pl-[50px] pr-[50px] pt-[20px] pb-[20px] rounded-[7px] relative"
    >
      <p
        style={startToExploreColor}
        className="whitespace-nowrap text-center flex-shrink-0 text-[20px] font-[Quicksand] font-semibold tracking-[-0.03em]"
      >
        Start to explore
      </p>
    </div>
  );
};
