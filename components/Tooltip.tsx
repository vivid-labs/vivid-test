export const Tooltip = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-center gap-[10px] px-[13px] py-[7px] rounded-[6px] relative [box-shadow:0px_2px_4px_rgb(30,_41,_59,_0.25)] bg-[rgb(255,_255,_255)]"
    >
      <p className="whitespace-nowrap text-[rgb(0,_0,_0)] text-[14px] font-[Inter] font-medium leading-5">
        Add to library
      </p>
    </div>
  );
};
