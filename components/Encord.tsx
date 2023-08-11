import screenshot from "./screenshot.png";
export const Encord = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-start gap-2.5 w-full px-[19px] relative bg-white font-[Inter]"
      style={override}
    >
      <img className="w-[1100px] h-[511px] object-cover" src={screenshot.src} />
      <div
        className="overflow-hidden flex flex-col justify-center items-center rounded-full absolute w-[35px] left-[411px] h-[35px] top-[125px] bg-white"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p className="text-[rgb(59,_59,_59)] text-base font-medium leading-6">
          ?
        </p>
        <div className="absolute w-[25px] left-[5px] h-[25px] top-[5px] border-solid border-[rgb(59,_59,_59)] border-[0.125rem] rounded-[50%]" />
      </div>
      <div
        className="overflow-hidden flex flex-col items-start gap-2.5 p-2.5 rounded-lg absolute w-[229px] left-[459px] h-[87px] top-[125px] bg-white"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.50)",
        }}
      >
        <div className="overflow-hidden flex items-start pb-2 w-full border-solid border-[rgb(207,_207,_207)] border-b">
          <p className="w-[91px] h-[19px] text-black text-base font-semibold leading-6">
            Selection
          </p>
        </div>
        <p className="w-[206px] h-20 text-black text-xs font-normal leading-4">
          The pen tool can be used to select to make a labelling selection.
        </p>
      </div>
    </div>
  );
};
