import ski from "./ski.png";
export const Ski = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex h-[416px] flex-col items-start" style={override}>
      <img
        className="h-[416px] w-[376px] flex-shrink-0 object-cover"
        src={ski.src}
      />
    </div>
  );
};
