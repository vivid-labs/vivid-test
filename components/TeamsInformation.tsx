export const TeamsInformation = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex flex-col items-start relative w-full flex-shrink-0 font-[Avenir]"
      style={override}
    >
      <div className="flex flex-col items-start relative flex-shrink-0">
        <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-4xl font-black tracking-[-0.85px] leading-10">
          Get Started with Vivid!
        </p>
      </div>
    </div>
  );
};
