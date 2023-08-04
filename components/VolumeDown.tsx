import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="relative flex h-8 w-8 flex-col items-center justify-center overflow-hidden p-[5px]"
      style={override}
    >
      <div>
        <img
          className="absolute -bottom-[5.67px] -right-[4.63px] left-[4.63px] top-[5.67px] h-auto w-auto"
          src={volumeDown.src}
        />
      </div>
    </div>
  );
};
