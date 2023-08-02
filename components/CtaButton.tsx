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
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        padding: "9px 12px",
        borderRadius: "5px",
        position: "relative",
        boxShadow: "0px 0px 4px  rgba(190, 190, 190, 0.25)",
        ...ctaButtonVariants,
        ...override,
      }}
    >
      <Logo />
      <p
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        {text}
      </p>
    </div>
  );
};
