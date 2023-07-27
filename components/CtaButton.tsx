import { Logo } from "./Logo";
export const CtaButton = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-center gap-[10px] px-[12px] py-[9px] rounded-[5px] relative [box-shadow:0px_0px_4px_rgb(190,_190,_190,_0.25)] bg-[linear-gradient(_160deg,_rgb(253,_185,_67,_1)_0%,_rgb(215,_113,_231,_1)_100%_)]"
      figma-id="14:13:226"
    >
      <Logo
        override={{
          position: "relative",
        }}
        figma-id="14:13:204"
      />
      <p
        className="text-[rgb(255,_255,_255)] text-[16px] font-[Lato] font-bold"
        figma-id="14:13:35"
      >
        Start asking questions
      </p>
    </div>
  );
};
