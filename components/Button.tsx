export const Button = ({
  override,
  color,
}: {
  override?: React.CSSProperties;
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
      className="flex justify-center items-center px-[50px] py-5 rounded-[7px]"
      style={{
        ...buttonColor,
        ...override,
      }}
    >
      <p
        className="whitespace-nowrap text-xl font-semibold tracking-[-0.03em]"
        style={{
          ...startToExploreColor,
        }}
      >
        Start to explore
      </p>
    </div>
  );
};
