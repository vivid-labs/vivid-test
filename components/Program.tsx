import group_10 from "./group_10.svg";
export const Program = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="relative flex h-8 w-8 flex-col items-center justify-center overflow-hidden p-[5px]"
      style={override}
    >
      <div>
        <img
          className="absolute -bottom-[6.23px] -right-[4px] left-1 top-[6.23px] h-auto w-auto"
          src={group_10.src}
        />
      </div>
    </div>
  );
};
