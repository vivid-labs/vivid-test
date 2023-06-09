import ski from "./ski.jpg";

export const Ski = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-start items-start gap-[10px] relative h-[416px] bg-[]"
    >
      <img
        src={ski.src}
        className="w-[376px] flex-shrink-0 flex-1 [0] object-cover opacity-100 rounded-[20px]"
      />
    </div>
  );
};
