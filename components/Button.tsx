import { LogoIcon } from "./LogoIcon";
export const Button = ({
  override,
  logo,
}: {
  override?: React.CSSProperties;
  logo: React.ReactNode;
}) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center gap-2.5 px-[19px] py-[9px] rounded-[5px] bg-[rgb(109,_121,_235)]"
      style={override}
    >
      {logo}
      <p className="text-black text-xs font-normal">Click Me</p>
    </div>
  );
};
