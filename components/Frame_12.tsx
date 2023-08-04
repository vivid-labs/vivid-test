export const Frame_12 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex w-full items-start gap-[68px] overflow-hidden bg-white p-8 font-[Inter]"
      style={override}
    >
      <div className="h-[100px] w-[100px] bg-emerald-500" />
      <div className="h-[100px] w-[100px] border-[1rem] border-solid border-emerald-500" />
      <div
        className="h-[100px] w-[100px] bg-white"
        style={{
          boxShadow: "0px 4px 32px 64px rgb(16, 185, 129)",
        }}
      />
      <p className="whitespace-nowrap text-5xl font-normal text-emerald-500">
        HELP MEEEE
      </p>
    </div>
  );
};
