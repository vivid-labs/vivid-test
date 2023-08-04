export const Link = ({
  override,
  linkText,
}: {
  override?: React.CSSProperties;
  linkText: string;
}) => {
  return (
    <div className="flex items-start" style={override}>
      <p className="whitespace-nowrap text-[15px] font-medium text-white">
        {linkText}
      </p>
    </div>
  );
};
