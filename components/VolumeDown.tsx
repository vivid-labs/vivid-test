import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-center items-center gap-[10px] p-[5px] relative w-8 h-8"
      figma-id="1201:1550"
    >
      <div figma-id="1201:1551">
        <img
          src={volumeDown.src}
          className="absolute left-[4.63px] -right-[4.63px] w-auto top-[5.67px] -bottom-[5.67px] h-auto"
          figma-id="1201:1552"
        />
      </div>
    </div>
  );
};
