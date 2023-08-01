import { Logo } from "./Logo";
export const CtaButton = ({
  override,
  variants,
  text,
}: {
  override?: any;
  variants: string;
  text: string;
}) => {
  const ctaButtonVariants =
    variants === "Gradient"
      ? {
          background:
            "linear-gradient(160deg, rgb(253, 185, 67) 0%, rgb(215, 113, 231) 100%)",
        }
      : {
          backgroundColor: "rgb(0, 0, 0)",
        };
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
