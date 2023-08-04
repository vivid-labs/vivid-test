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
      className="flex justify-center items-center px-[50px] py-5 rounded-[7px] relative"
    >
      <p
        style={startToExploreColor}
        className="whitespace-nowrap text-center text-xl font-semibold tracking-[-0.03em]"
      >
        Start to explore
      </p>
    </div>
  );
};
