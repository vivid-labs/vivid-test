import "./Program.css";
import group_10 from "./group_10.svg";

export const Program = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-center items-center gap-[10px] p-[5px] relative w-[32px] h-[32px]"
    >
      <div>
        <img
          src={group_10.src}
          className="absolute left-[4px] -right-[4px] w-auto top-[6.23px] -bottom-[6.23px] h-auto"
        />
      </div>
    </div>
  );
};
