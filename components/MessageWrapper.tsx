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
      className="flex flex-col justify-center relative w-[877px] h-[60px]"
    >
      <div
        style={messageFrom}
        className="overflow-hidden flex justify-center items-end px-5 py-2 rounded-full relative flex-shrink-0"
      >
        <p className="whitespace-nowrap flex flex-col justify-center text-white text-base font-normal">
          {message}
        </p>
      </div>
    </div>
  );
};
