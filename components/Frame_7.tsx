import logo from "./logo.png";
export const Frame_7 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-center gap-4 px-[54px] py-4 rounded-lg w-full bg-white font-[Avenir]"
      style={override}
    >
      <img className="w-[42px] h-11 object-cover" src={logo.src} />
      <p className="w-full text-black text-lg font-extrabold">
        Finish signing up!
      </p>
      <p className="w-full text-black text-sm font-normal">
        This link will redirect you to Stripe to complete your account creation.{" "}
      </p>
      <div className="flex flex-col justify-center items-center gap-1 w-full">
        <div className="overflow-hidden flex justify-center items-start gap-1 px-[5px] w-[193px]">
          <p className="w-[62px] text-[rgb(208,_208,_208)] text-3xl font-black line-through">
            &#x24;15
          </p>
          <div className="flex justify-center items-end">
            <p className="text-black font-black">&#x24;5 per month</p>
          </div>
        </div>
        <div className="overflow-hidden flex items-start px-1.5 py-1 rounded bg-[rgb(209,_243,_229)]">
          <p className="text-[rgb(27,_196,_125)] text-xs font-medium">
            Save 66% with early bird!
          </p>
        </div>
      </div>
      <div className="overflow-hidden flex justify-center items-center px-3 py-2 rounded bg-[rgb(69,_141,_255)]">
        <p className="text-white text-sm font-normal">Finish sign up!</p>
      </div>
    </div>
  );
};
