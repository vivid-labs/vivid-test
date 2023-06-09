import group_10 from "./group_10.svg";

export const Program = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-center items-center gap-[10px] p-[5px] relative w-32 h-[8rem]"
    >
      <div>
        <img
          src={group_10.src}
          className="absolute left-4 -right-4 w-auto top-[6.23px] -bottom-[6.23px] h-auto"
        />
      </div>
    </div>
  );
};
