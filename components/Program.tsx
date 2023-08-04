import group_10 from "./group_10.svg";
export const Program = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-center items-center p-[5px] relative w-8 h-8"
      style={override}
    >
      <div>
        <img
          className="absolute left-1 -right-[4px] w-auto top-[6.23px] -bottom-[6.23px] h-auto"
          src={group_10.src}
        />
      </div>
    </div>
  );
};
