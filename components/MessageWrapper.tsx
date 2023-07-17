export const MessageWrapper = ({
  override,
  from,
  message,
}: {
  override?: any;
  from: string;
  message: string;
}) => {
  const messageFrom =
    from === "Me"
      ? {
          backgroundColor: "rgb(69, 141, 247)",
        }
      : {
          backgroundColor: "rgb(72, 72, 72)",
        };
  const messageWrapperFrom =
    from === "Me"
      ? {
          alignItems: "flex-end",
        }
      : {
          alignItems: "flex-start",
        };
  return (
    <div
      style={{
        ...messageWrapperFrom,
        ...override,
      }}
      className="flex flex-col justify-center relative w-[877px] h-[3.75rem]"
      figma-id="1:199"
    >
      <div
        style={messageFrom}
        className="overflow-hidden flex justify-center items-end gap-[10px] px-[20px] py-[8px] rounded-[100px] relative flex-shrink-0"
        figma-id="1:195"
      >
        <p
          className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[16px] font-[Avenir] font-normal"
          figma-id="1:203"
        >
          {message}
        </p>
      </div>
    </div>
  );
};
