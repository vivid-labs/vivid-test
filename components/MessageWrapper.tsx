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
      className="flex h-[60px] w-[877px] flex-col justify-center"
      style={{
        ...messageWrapperFrom,
        ...override,
      }}
    >
      <div
        className="flex flex-shrink-0 items-end justify-center overflow-hidden rounded-full px-5 py-2"
        style={{
          ...messageFrom,
        }}
      >
        <p className="whitespace-nowrap text-base font-normal text-white">
          {message}
        </p>
      </div>
    </div>
  );
};
