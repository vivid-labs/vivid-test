import group from "./group.svg";
export const Heading_2 = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex h-[69px] w-full flex-shrink-0 flex-col items-start gap-2 font-[Avenir]"
      style={override}
    >
      <div className="relative h-[19px] w-full flex-shrink-0">
        <div className="absolute left-0 h-[15px] w-4 overflow-hidden">
          <div className="absolute top-0 h-[15px] w-4">
            <img
              className="absolute bottom-[0.35px] left-[0.29px] right-[0.32px] top-[0.16px] h-auto w-auto"
              src={group.src}
            />
          </div>
        </div>
        <p className="whitespace-nowrap text-[13.5px] font-medium leading-[19px] tracking-[0.05px] text-[rgb(244,_86,_154)]">
          Free for 2 weeks in beta
        </p>
      </div>
      <p className="flex flex-col justify-center text-4xl font-black leading-10 tracking-[-0.85px] text-[rgb(18,_18,_18)]">
        Vivid Teams
      </p>
    </div>
  );
};
