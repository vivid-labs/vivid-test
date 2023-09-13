import zoomLogo from "./zoomLogo.png";
export const ZoomIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-center items-center py-2 rounded-full w-[30px] h-[30px] bg-[rgb(74,_138,_246)]"
      style={override}
    >
      <img className="w-[22px] h-[5px] object-cover" src={zoomLogo.src} />
    </div>
  );
};
