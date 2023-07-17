import jungle from "./jungle.jpg";
export const Jungle = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col items-start gap-[10px] relative h-[282.12px]"
      figma-id="1201:1542"
    >
      <img
        src={jungle.src}
        className="w-[23.5rem] flex-shrink-0 flex-1 min-h-[0rem] object-cover opacity-100 rounded-[20px]"
        figma-id="1201:1543"
      />
    </div>
  );
};
