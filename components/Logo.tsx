import icon from "./icon.svg";
export const Logo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="w-full">
      <img
        src={icon.src}
        className="absolute left-[16.25rem] -right-[125.44px] w-auto top-[43px] -bottom-[36.21px] h-auto"
      />
      <p className="whitespace-nowrap text-[rgb(35,_22,_86)] text-[30px] font-[Jost] font-normal leading-[1.3em]">
        PrimePay.
      </p>
    </div>
  );
};
