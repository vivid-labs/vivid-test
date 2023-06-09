export const Link = ({
  override,
  linkText,
}: {
  override?: any;
  linkText: string;
}) => {
  return (
    <div
      style={override}
      className="flex flex-row justify-start items-start relative bg-[]"
    >
      <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[15px] font-[Quicksand] font-medium">
        {linkText}
      </p>
    </div>
  );
};
