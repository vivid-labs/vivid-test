import { Close } from "./Close";
export const AlertWarning = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="rounded-[3px] relative w-full h-[3.25rem] border-solid border-[rgb(250,_226,_199)] border-[0.5px] bg-[rgb(253,_240,_227)]"
      figma-id="1:75"
    >
      <p
        className="text-[rgb(174,_87,_0)] text-[14px] font-[Roboto] font-bold leading-5"
        figma-id="1:76"
      >
        Alert warning message
      </p>
      <Close
        override={{
          width: "16px",
          height: "16px",
        }}
      />
    </div>
  );
};
