export const UserAvatar = ({
  override,
  letters,
}: {
  override?: React.CSSProperties;
  letters: string;
}) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-center items-center rounded-full w-6 h-6 border-solid border-[rgb(194,_195,_200)] border"
      style={override}
    >
      <p className="text-[rgb(80,_86,_98)] text-[8px] font-normal tracking-[-0.1px]">
        {letters}
      </p>
    </div>
  );
};
