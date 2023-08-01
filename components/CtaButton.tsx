const Button = ({text}) => {
  return (
    <div
      className="flex items-center gap-2.5 px-3 py-[9px] rounded-[5px] relative [box-shadow:0px_0px_4px_rgba(190,_190,_190,_0.25)]"
      style={{
        ...ctaButtonVariants,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
        height: "fit-content",
        padding: "9px 12px",
        borderRadius: "5px",
        position: "relative",
        boxShadow: "0px 0px 4px  rgba(190, 190, 190, 0.25)",
        ...override,
      }}
    >
      <Logo />
      <p
        className="text-white text-base font-bold"
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

export const CtaButton = ({override, variants, text}) => {
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
    <Button text={text} />
  );
};