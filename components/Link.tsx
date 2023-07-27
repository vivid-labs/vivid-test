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
      className="flex items-start relative"
      figma-id="4:6:329"
    >
      <p
        className="whitespace-nowrap text-center text-[rgb(255,_255,_255)] text-[15px] font-[Quicksand] font-medium"
        figma-id="4:6:330"
      >
        {linkText}
      </p>
    </div>
  );
};
