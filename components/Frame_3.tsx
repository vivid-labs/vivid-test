import { CheckMark } from "./CheckMark";

export const Frame_3 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-row justify-center items-center gap-2 relative w-[533px] flex-shrink-0"
    >
      <CheckMark />
      <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(244,_86,_154)] text-[30px] font-[Avenir] font-extrabold">
        Success!
      </p>
    </div>
  );
};
