export const Tab = ({
  override,
  status,
  text,
}: {
  override?: React.CSSProperties;
  status: string;
  text: string;
}) => {
  const assignedToMe_15Status =
    status === "Active"
      ? {
          color: "rgb(3, 3, 3)",
        }
      : {
          color: "rgb(80, 86, 98)",
        };
  return (
    <div
      className="overflow-hidden flex justify-center items-center pb-2"
      style={override}
    >
      <p
        className="text-sm font-medium tracking-[-0.1px]"
        style={{
          ...assignedToMe_15Status,
        }}
      >
        {text}
      </p>
    </div>
  );
};
