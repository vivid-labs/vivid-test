import lake from "./lake.png";
export const Lake = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex h-[562px] items-start" style={override}>
      <img
        className="h-[563px] w-[376px] flex-shrink-0 object-cover"
        src={lake.src}
      />
    </div>
  );
};
