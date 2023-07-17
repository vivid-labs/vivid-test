import ski from "./ski.jpg";
export const Ski = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col items-start gap-[10px] relative h-[416px]"
      figma-id="1201:1548"
    >
      <img
        src={ski.src}
        className="w-[23.5rem] flex-shrink-0 flex-1 min-h-[0rem] object-cover opacity-100 rounded-[20px]"
        figma-id="1201:1549"
      />
    </div>
  );
};
