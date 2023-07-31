import group_1 from "./group_1.svg";
export const AutoGap = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-full h-[109px] flex-shrink-0">
      <div className="overflow-hidden flex justify-between items-center px-[7px] py-[5px] rounded-[100px] absolute w-10 left-[0rem] h-10 top-[0rem] bg-[rgb(242,_242,_242)]">
        <img src={group_1.src} className="w-[18px] h-[18px] flex-shrink-0" />
      </div>
      <div className="overflow-hidden flex justify-between items-center rounded-[100px] absolute w-10 left-px h-10 top-[67px] bg-[rgb(242,_242,_242)]">
        <img src={group_1.src} className="w-[18px] h-[18px] flex-shrink-0" />
      </div>
      <div className="overflow-hidden flex justify-center items-center px-[7px] py-[5px] rounded-[100px] absolute w-10 left-20 h-10 top-[0rem] bg-[rgb(242,_242,_242)]">
        <img src={group_1.src} className="w-[18px] h-[18px] flex-shrink-0" />
      </div>
      <div className="overflow-hidden flex justify-center items-center rounded-[100px] absolute w-10 left-20 h-10 top-[66px] bg-[rgb(242,_242,_242)]">
        <img src={group_1.src} className="w-[18px] h-[18px] flex-shrink-0" />
      </div>
    </div>
  );
};
