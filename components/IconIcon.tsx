import star_1 from "./star_1.svg";
export const IconIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center gap-2.5 w-full px-[19px] py-[9px] rounded-[5px] bg-[rgb(109,_121,_235)] font-[Inter]"
      style={override}
    >
      <img className="w-[25px] h-[25px]" src={star_1.src} />
      <p className="text-black text-xs font-normal">Click Me</p>
    </div>
  );
};
