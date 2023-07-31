export const Gap = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-start gap-[5px] px-0.5 py-px relative w-full h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]"
    >
      <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
      <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
      <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
    </div>
  );
};
