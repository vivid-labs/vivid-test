import "./Feature.css";
import vivid_f1b09686438e from "./f1b09686438e.svg";

export const Feature = () => {
  return (
    <div className="overflow-hidden flex flex-row items-center gap-[10px] pt-px pb-px">
      <img src={vivid_f1b09686438e.src} className="w-[7px] h-[7px]" />
      <p className="text-[rgb(0,_0,_0)] w-[99px] text-[6px] font-[Avenir] font-medium">
        Generate React code from Figma{" "}
      </p>
    </div>
  );
};
