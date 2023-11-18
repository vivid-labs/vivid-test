import star_1 from "./star_1.svg";
export const Button = ({
  override,
  icon,
}: {
  override?: React.CSSProperties;
  icon: string;
}) => {
  switch (icon) {
    case "Icon":
      return (
        <div
          className="overflow-hidden flex justify-center items-center gap-2.5 px-[19px] py-[9px] rounded-[5px] bg-[rgb(109,_121,_235)]"
          style={override}
        >
          <img className="w-[25px] h-[25px]" src={star_1.src} />
          <p className="text-black text-xs font-normal">Click Me</p>
        </div>
      );
    case "No Icon":
      return (
        <div
          className="overflow-hidden flex justify-center items-center px-[19px] py-[9px] rounded-[5px] bg-[rgb(109,_121,_235)]"
          style={override}
        >
          <p className="text-black text-xs font-normal">Click Me</p>
        </div>
      );
    default:
      return null;
  }
};
