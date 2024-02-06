import jungle from "./jungle.png";
export const Jungle = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex flex-col items-start h-[282px]" style={override}>
      <img className="w-[376px] h-[283px] object-cover" src={jungle.src} />
    </div>
  );
};
