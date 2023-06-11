export const CardHeader = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-row justify-start items-start gap-[10px] relative w-[332.33px] flex-shrink-0"
    >
      <p className="flex-shrink-0 flex-1 min-w-[0] text-[rgb(17,_24,_39)] text-[20px] font-[Inter] font-semibold leading-[1.5em]">
        Latest Customers
      </p>
    </div>
  );
};
