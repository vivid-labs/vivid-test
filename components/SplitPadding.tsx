export const SplitPadding = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex justify-between items-center pb-[12px] relative w-full h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]"
    >
      <div className="overflow-hidden w-1 h-1 flex-shrink-0 bg-[rgb(255,_255,_255)]" />
      <div className="overflow-hidden w-1 h-1 flex-shrink-0 bg-[rgb(255,_255,_255)]" />
      <div className="overflow-hidden w-1 h-1 flex-shrink-0 bg-[rgb(255,_255,_255)]" />
    </div>
  );
};
