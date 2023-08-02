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
      className="flex justify-center items-center px-4 py-2 rounded-[5px] relative [box-shadow:0px_4px_9px_rgba(0,_0,_0),_0px_1.54px_2.87px_rgba(0,_0,_0),_0px_0.33px_0.73px_rgba(0,_0,_0)]"
      style={{
        ...buttonType,
        ...override,
      }}
    >
      <p className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_205,_41)] text-base font-medium tracking-[0.01px] leading-[23px]">
        {text}
      </p>
    </div>
  );
};
