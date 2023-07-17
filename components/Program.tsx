import group_10 from "./group_10.svg";
export const Program = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-center items-center gap-[10px] p-[5px] relative w-8 h-8"
      figma-id="1201:1554"
    >
      <div figma-id="1201:1555">
        <img
          src={group_10.src}
          className="absolute left-1 -right-1 w-auto top-[6.23px] -bottom-[6.23px] h-auto"
          figma-id="1201:1556"
        />
      </div>
    </div>
  );
};
