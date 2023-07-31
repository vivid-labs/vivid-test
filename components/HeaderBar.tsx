import { Logo } from "./Logo";
export const HeaderBar = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-center gap-2 px-[16px] py-[8px] relative w-full flex-shrink-0 bg-[linear-gradient(_160deg,_rgb(253,_185,_67,_1)_0%,_rgb(215,_113,_231,_1)_100%_)]"
    >
      <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[23px] leading-10">
        Dive deeper with
      </p>
      <div className="flex items-center relative flex-shrink-0">
        <Logo />
        <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[24px] font-[Lato] font-bold">
          {" "}
          AI Chat
        </p>
      </div>
    </div>
  );
};
