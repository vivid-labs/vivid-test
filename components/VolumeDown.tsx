import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-center items-center p-[5px] relative w-8 h-8"
      style={override}
    >
      <div className="w-[23px] h-[21px]">
        <img
          className="absolute left-[4.63px] -right-[4.63px] w-auto top-[5.67px] -bottom-[5.67px] h-auto"
          src={volumeDown.src}
        />
      </div>
    </div>
  );
};
