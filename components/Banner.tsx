import { ArrowIcon } from "./ArrowIcon";
import { CloseIcon } from "./CloseIcon";
export const Banner = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center gap-2 px-4 py-[29px] relative w-[1036px] bg-[rgb(237,_201,_91)]"
      style={override}
    >
      <p className="text-black text-2xl font-extrabold">
        EARN ON EVERY VISIT WITH CAVA REWARDS.
      </p>
      <div className="overflow-hidden flex justify-center items-center pb-0.5">
        <p className="text-black text-xl font-bold underline">
          Sign up to get started
        </p>
      </div>
      <ArrowIcon
        override={{
          height: "12px",
          width: "17px",
        }}
      />
      <CloseIcon
        override={{
          width: "14px",
          height: "14px",
          position: "absolute",
          top: "calc(50% - 9.5px)",
          right: "28px",
        }}
      />
    </div>
  );
};
