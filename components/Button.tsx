export const Button = ({
  override,
  type,
  text,
}: {
  override?: any;
  type: string;
  text: string;
}) => {
  const buttonType =
    type === "Primary"
      ? {
          backgroundColor: "rgb(244, 86, 154)",
        }
      : {
          backgroundColor: "rgb(0, 0, 0)",
        };
  return (
    <div
      className="flex justify-center items-center px-4 py-2 rounded-[5px] relative [box-shadow:0px_4px_9px_rgba(0,_0,_0,_0.05),_0px_1.54px_2.87px_rgba(0,_0,_0,_0.07),_0px_0.33px_0.73px_rgba(0,_0,_0,_0.12)]"
      style={{
        ...buttonType,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        padding: "8px 16px",
        borderRadius: "5px",
        position: "relative",
        boxShadow:
          "0px 4px 9px  rgba(0, 0, 0, 0.05), 0px 1.54px 2.87px  rgba(0, 0, 0, 0.07), 0px 0.33px 0.73px  rgba(0, 0, 0, 0.12)",
        ...override,
      }}
    >
      <p
        className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_205,_41)] text-base font-medium tracking-[0.01px] leading-[23px]"
        style={{
          width: "fit-content",
          whiteSpace: "nowrap",
          height: "fit-content",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(255, 205, 41)",
          fontSize: "16px",
          fontWeight: 500,
          letterSpacing: "0.01px",
          lineHeight: "23px",
        }}
      >
        {text}
      </p>
    </div>
  );
};
