export const Button = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center rounded w-[132px] h-7"
      style={{
        background:
          "linear-gradient(rgb(217, 52, 118) 0%, rgb(229, 127, 57) 100%)",
        ...override,
      }}
    >
      <p className="text-white text-xs font-medium tracking-[-0.1px]">{text}</p>
    </div>
  );
};
