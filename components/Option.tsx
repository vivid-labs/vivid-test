export const Option = ({
  override,
  color,
  text,
}: {
  override?: React.CSSProperties;
  color: string;
  text: string;
}) => {
  const badgeColor = {
    Gray: {
      borderColor: "rgb(226, 226, 226)",
      backgroundColor: "rgb(251, 251, 251)",
    },
    Orange: {
      borderColor: "rgb(246, 215, 186)",
      backgroundColor: "rgb(249, 230, 212)",
    },
    Green: {
      borderColor: "rgb(168, 245, 197)",
      backgroundColor: "rgb(199, 250, 218)",
    },
  }[color];
  return (
    <div
      className="overflow-hidden flex flex-col items-start px-2 py-1 w-[95px] bg-white"
      style={override}
    >
      <div
        className="overflow-hidden flex justify-center items-center px-1.5 py-1 rounded border-solid border"
        style={{
          ...badgeColor,
        }}
      >
        <p className="text-[rgb(46,_46,_46)] text-xs font-normal">{text}</p>
      </div>
    </div>
  );
};
