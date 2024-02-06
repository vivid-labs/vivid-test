import ski from "./ski.png";
export const Ski = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex flex-col items-start h-[416px]" style={override}>
      <img className="w-[376px] h-[416px] object-cover" src={ski.src} />
    </div>
  );
};
