import combo from "./combo.png";
export const RectFills = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-start gap-[5px] w-full p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]"
    >
      <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgb(0,_0,_0,_0)_100%_)]" />
      <div className="w-[30px] h-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgb(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgb(0,_0,_0,_0)_100%),_linear-gradient(180deg,_rgb(255,_0,_0,_0.9)_0%,_rgb(0,_0,_0,_0)_100%)]" />
      <div className="w-[30px] h-[30px] flex-shrink-0" />
      <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(rgb(255,_0,_0,_0.49),_rgb(255,_0,_0,_0.49)),_linear-gradient(rgb(36,_255,_0,_0.79),_rgb(36,_255,_0,_0.79))]" />
      <img
        src={combo.src}
        className="w-[30px] h-[30px] flex-shrink-0 object-cover"
      />
      <div className="w-[30px] h-[30px] flex-shrink-0 origin-top-left overflow-hidden">
        <img
          src={combo.src}
          className="transform scale-x-[96.46%] scale-y-[34.74%] origin-top-left h-full w-full"
        />
      </div>
      <div className="relative w-[30px] h-[30px] flex-shrink-0 overflow-hidden">
        <img src={combo.src} className="object-cover absolute h-full w-full" />
        <img
          src={combo.src}
          className="transform scale-x-[96.46%] scale-y-[34.74%] origin-top-left absolute h-full w-full"
        />
        <img
          src={combo.src}
          className="transform rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] origin-top-left absolute h-full w-full"
        />
      </div>
      <div className="relative w-[30px] h-[30px] flex-shrink-0 overflow-hidden">
        <div className="bg-[rgb(0,_255,_255)] absolute h-full w-full" />
        <img
          src={combo.src}
          className="object-cover opacity-50 absolute h-full w-full"
        />
        <div className="bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgb(0,_0,_0,_0)_100%_)] absolute h-full w-full" />
        <img
          src={combo.src}
          className="transform scale-x-[96.46%] scale-y-[34.74%] origin-top-left absolute h-full w-full"
        />
        <div className="bg-[radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgb(0,_0,_0,_0)_100%)] absolute h-full w-full" />
        <img
          src={combo.src}
          className="transform rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] origin-top-left absolute h-full w-full"
        />
        <div className="bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgb(0,_0,_0,_0)_100%_)] absolute h-full w-full" />
      </div>
    </div>
  );
};
