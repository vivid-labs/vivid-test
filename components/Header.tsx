import icon from "./icon.svg";
export const Header = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="w-full">
      <div>
        <div className="absolute w-[8.75rem] left-[1520px] h-[70px] top-10 bg-[rgb(35,_22,_86)] rounded-[72px]" />
        <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[18px] font-[Inter] font-normal leading-[1.6em]">
          LOgIn
        </p>
      </div>
      <div>
        <div>
          <img
            src={icon.src}
            className="absolute left-[16.25rem] -right-[125.44px] w-auto top-[43px] -bottom-[36.21px] h-auto"
          />
          <p className="whitespace-nowrap text-[rgb(35,_22,_86)] text-[30px] font-[Jost] font-normal leading-[1.3em]">
            PrimePay.
          </p>
        </div>
      </div>
      <p className="whitespace-nowrap text-[rgb(35,_22,_86)] text-[18px] font-[Inter] font-bold leading-[1.6em]">
        About Us Features Pricing Blog
      </p>
    </div>
  );
};
