import { CheckIcon } from "./CheckIcon";
import { XIcon } from "./XIcon";

export const IconButton = ({
  override,
  icon,
}: {
  override?: React.CSSProperties;
  icon: string;
}) => {
  switch (icon) {
    case "Check":
      return (
        <div
          className="overflow-hidden flex justify-center items-center rounded-md w-7 h-7 border-solid border-[rgb(194,_195,_200)] border"
          style={override}
        >
          <CheckIcon
            override={{
              height: "20px",
              width: "20px",
            }}
          />
        </div>
      );
    case "X":
      return (
        <div
          className="overflow-hidden flex justify-center items-center rounded-md w-7 h-7 border-solid border-[rgb(194,_195,_200)] border"
          style={override}
        >
          <XIcon />
        </div>
      );
    case "Ellipsis":
      return (
        <div
          className="overflow-hidden flex justify-center items-center rounded-md w-7 h-7 border-solid border-[rgb(194,_195,_200)] border"
          style={override}
        >
          <div className="flex justify-center items-center gap-0.5">
            <div className="w-0.5 h-0.5 bg-[rgb(80,_86,_98)] rounded-[50%]" />
            <div className="w-0.5 h-0.5 bg-[rgb(80,_86,_98)] rounded-[50%]" />
            <div className="w-0.5 h-0.5 bg-[rgb(80,_86,_98)] rounded-[50%]" />
          </div>
        </div>
      );
    default:
      return null;
  }
};
