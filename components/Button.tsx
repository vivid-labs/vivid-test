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
      style={{
        ...buttonType,
        ...override,
      }}
      className="flex flex-row justify-center items-center pl-4 pr-4 pt-2 pb-2 rounded-[5px] relative [box-shadow:0px_4px_9px_rgb(0,_0,_0,_0.05),_0px_1.54px_2.87px_rgb(0,_0,_0,_0.07),_0px_0.33px_0.73px_rgb(0,_0,_0,_0.12)]"
    >
      <p className="whitespace-nowrap text-center flex flex-col justify-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[16px] font-[Avenir] font-medium tracking-[0.00800000037997961px] leading-[23px]">
        {text}
      </p>
    </div>
  );
};
