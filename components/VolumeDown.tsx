import volumeDown from "./volumeDown.svg";

export const VolumeDown = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-center items-center gap-[10px] p-[5px] relative w-32 h-[8rem]"
    >
      <div>
        <img
          src={volumeDown.src}
          className="absolute left-[4.63px] -right-[4.63px] w-auto top-[5.67px] -bottom-[5.67px] h-auto"
        />
      </div>
    </div>
  );
};
