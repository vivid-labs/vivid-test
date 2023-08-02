export const HugFullChild = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex justify-center items-center gap-1 p-1 relative w-full flex-shrink-0 bg-[rgb(191,_43,_43)]"
      style={override}
    >
      <div className="overflow-hidden w-[47px] h-[43px] flex-shrink-0 bg-white" />
      <div className="overflow-hidden w-[26px] h-[83px] flex-shrink-0 bg-white" />
      <div className="overflow-hidden w-[54px] flex-shrink-0 self-stretch bg-white" />
    </div>
  );
};
