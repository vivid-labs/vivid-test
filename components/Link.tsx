export const Link = ({
  override,
  linkText,
}: {
  override?: React.CSSProperties;
  linkText: string;
}) => {
  return (
    <div className="flex items-start" style={override}>
      <p className="whitespace-nowrap text-white text-[15px] font-medium">
        {linkText}
      </p>
    </div>
  );
};
