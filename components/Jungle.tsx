import jungle from "./jungle.jpg";

export const Jungle = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-start items-start gap-[10px] relative h-[282.12px] bg-[]"
    >
      <img
        src={jungle.src}
        className="w-[376px] flex-shrink-0 flex-1 [0] object-cover opacity-100 rounded-[20px]"
      />
    </div>
  );
};
