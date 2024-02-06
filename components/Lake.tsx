import lake from "./lake.png";
export const Lake = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex items-start h-[562px]" style={override}>
      <img className="w-[376px] h-[563px] object-cover" src={lake.src} />
    </div>
  );
};
