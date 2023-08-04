import jungle from "./jungle.png";
export const Jungle = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex h-[282px] flex-col items-start" style={override}>
      <img
        className="h-[283px] w-[376px] flex-shrink-0 object-cover"
        src={jungle.src}
      />
    </div>
  );
};
