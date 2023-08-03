export const Details = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex w-full flex-shrink-0 items-start pr-9 font-[Avenir]"
      style={override}
    >
      <p className="text-[15px] font-normal leading-[19px] tracking-[0.1px] text-[rgb(18,_18,_18)]">
        Generate summaries, action items &amp;amp; insights
      </p>
    </div>
  );
};
