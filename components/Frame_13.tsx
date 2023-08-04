export const Frame_13 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex w-full items-start gap-[68px] overflow-hidden bg-white p-8 font-[Inter]"
      style={override}
    >
      <div className="h-[100px] w-[100px] bg-transparent" />
      <div className="h-[100px] w-[100px] border-[1rem] border-solid border-transparent" />
      <div
        className="h-[100px] w-[100px] bg-white"
        style={{
          boxShadow: "0px 4px 32px 64px rgba(16, 185, 129, 0.00)",
        }}
      />
      <p className="whitespace-nowrap text-5xl font-normal text-transparent">
        HELP MEEEE
      </p>
    </div>
  );
};
