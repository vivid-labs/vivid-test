import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative flex h-[41px] w-[41px] flex-col items-start overflow-hidden"
      style={override}
    >
      <img className="min-h-0 w-full flex-1 flex-shrink-0" src={group.src} />
    </div>
  );
};
