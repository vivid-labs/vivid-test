export const Button = ({
  override,
  type,
  text,
}: {
  override?: React.CSSProperties;
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
      className="flex justify-center items-center px-4 py-2 rounded-[5px]"
      style={{
        ...buttonType,
        boxShadow:
          "0px 4px 9px rgba(0, 0, 0, 0.05), 0px 1.54px 2.87px rgba(0, 0, 0, 0.07), 0px 0.33px 0.73px rgba(0, 0, 0, 0.12)",
        ...override,
      }}
    >
      <p className="text-[rgb(255,_205,_41)] text-base font-medium tracking-[0.01px] leading-[23px]">
        {text}
      </p>
    </div>
  );
};
