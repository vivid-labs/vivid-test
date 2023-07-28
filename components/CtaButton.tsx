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
            "linear-gradient(160deg, rgb(253, 185, 67, 1.00) 0%, rgb(215, 113, 231, 1.00) 100%)",
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
      className="flex items-center gap-[10px] px-[12px] py-[9px] rounded-[5px] relative [box-shadow:0px_0px_4px_rgb(190,_190,_190,_0.25)]"
      figma-id="14:13:226"
    >
      <Logo
        override={{
          position: "relative",
        }}
        figma-id="14:17:322"
      />
      <p
        className="text-[rgb(255,_255,_255)] text-[16px] font-[Lato] font-bold"
        figma-id="14:13:35"
      >
        {text}
      </p>
    </div>
  );
};
