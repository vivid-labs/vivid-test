export const Button = ({
  override,
  importance,
  status,
}: {
  override?: React.CSSProperties;
  importance: string;
  status: string;
}) => {
  const buttonImportance =
    importance === "Primary"
      ? {
          backgroundColor: "rgb(31, 51, 238)",
        }
      : {
          backgroundColor: "rgb(158, 158, 158)",
        };
  const buttonDivStatus =
    status === "Enabled"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(158, 158, 158)",
        };
  return (
    <div
      className="overflow-hidden flex justify-center items-center px-[19px] py-[9px] rounded-[5px]"
      style={{
        ...buttonImportance,
        ...buttonDivStatus,
        ...override,
      }}
    >
      <p className="text-black text-xs font-normal">Click Me</p>
    </div>
  );
};
