import { CheckIcon } from "./CheckIcon";
export const Step = ({
  override,
  status,
  text,
  number,
}: {
  override?: React.CSSProperties;
  status: string;
  text: string;
  number: string;
}) => {
  switch (status) {
    case "Done":
      return (
        <div
          className="overflow-hidden flex justify-center items-center gap-1"
          style={override}
        >
          <CheckIcon />
          <p className="text-[rgb(123,_129,_138)] text-xs font-normal tracking-[-0.1px]">
            {text}
          </p>
        </div>
      );
    case "Active":
      return (
        <div
          className="overflow-hidden flex justify-center items-center gap-1"
          style={override}
        >
          <div
            className="overflow-hidden flex flex-col justify-center items-center rounded-full w-5 h-5"
            style={{
              background:
                "linear-gradient(90deg, rgb(217, 52, 118) 0%, rgb(229, 127, 57) 100%)",
            }}
          >
            <p className="text-white text-xs font-light tracking-[-0.1px]">
              {number}
            </p>
          </div>
          <p className="text-[rgb(80,_86,_98)] text-xs font-normal tracking-[-0.1px]">
            {text}
          </p>
        </div>
      );
    case "To Do":
      return (
        <div
          className="overflow-hidden flex justify-center items-center gap-1"
          style={override}
        >
          <div className="overflow-hidden flex flex-col justify-center items-center rounded-full w-5 h-5 bg-[rgb(225,_226,_230)]">
            <p className="text-white text-xs font-light tracking-[-0.1px]">
              {number}
            </p>
          </div>
          <p className="text-[rgb(123,_129,_138)] text-xs font-normal tracking-[-0.1px]">
            {text}
          </p>
        </div>
      );
    default:
      return null;
  }
};
