import combo from "./combo.png";
export const RectFills = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex w-full flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]"
      style={override}
    >
      <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgba(0,_0,_0,_0)_100%_)]" />
      <div className="h-[30px] w-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgba(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgba(0,_0,_0,_0)_100%),_linear-gradient(180deg,_rgb(255,_0,_0,_0.9)_0%,_rgba(0,_0,_0,_0)_100%)]" />
      <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgba(36,_255,_0,_0.79)]" />
      <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(rgba(255,_0,_0,_0.49),_rgba(255,_0,_0,_0.49)),_linear-gradient(rgba(36,_255,_0,_0.79),_rgba(36,_255,_0,_0.79))]" />
      <img
        className="h-[30px] w-[30px] flex-shrink-0 object-cover"
        src={combo.src}
      />
      <div className="h-[30px] w-[30px] flex-shrink-0 origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
          src={combo.src}
        />
      </div>
      <div className="relative h-[30px] w-[30px] flex-shrink-0 overflow-hidden">
        <img className="absolute h-full w-full object-cover" src={combo.src} />
        <img
          className="absolute h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
          src={combo.src}
        />
        <img
          className="absolute h-full w-full origin-top-left -translate-y-[4.12%] translate-x-[2.9%] rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] transform"
          src={combo.src}
        />
      </div>
      <div className="relative h-[30px] w-[30px] flex-shrink-0 overflow-hidden">
        <div className="absolute h-full w-full bg-[rgb(0,_255,_255)]" />
        <img
          className="absolute h-full w-full object-cover opacity-50"
          src={combo.src}
        />
        <div className="absolute h-full w-full bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgba(0,_0,_0,_0)_100%_)]" />
        <img
          className="absolute h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
          src={combo.src}
        />
        <div className="absolute h-full w-full bg-[radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgba(0,_0,_0,_0)_100%)]" />
        <img
          className="absolute h-full w-full origin-top-left -translate-y-[4.12%] translate-x-[2.9%] rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] transform"
          src={combo.src}
        />
        <div className="absolute h-full w-full bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgba(0,_0,_0,_0)_100%_)]" />
      </div>
    </div>
  );
};
