import { Logo } from "./Logo";

const CtaButtonVariant1 = () => ({
  background:
    "linear-gradient(160deg, rgb(253, 185, 67) 0%, rgb(215, 113, 231) 100%)",
});

const CtaButtonVariant2 = () => ({
  backgroundColor: "rgb(0, 0, 0)",
});

const CtaButton = ({ override, variants, text }) => {
  const ctaButtonVariants = variants === "Gradient" ? CtaButtonVariant1() : CtaButtonVariant2();

  return (
    <div
      style={{
        ...ctaButtonVariants,
        ...override,
      }}
      className="flex items-center gap-2.5 px-3 py-[9px] rounded-[5px] relative [box-shadow:0px_0px_4px_rgba(190,_190,_190)]"
    >
      <Logo />
      <p className="text-white text-base font-[Lato] font-bold">{text}</p>
    </div>
  );
};

export default CtaButton;