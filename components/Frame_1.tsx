import { Vector_1 } from "./Vector_1";
import { Ellipse_3 } from "./Ellipse_3";
export const Frame_1 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex items-start gap-[10px] px-[96px] py-[77px] relative bg-[rgb(237,_237,_237)]"
      figma-id="611:621"
    >
      <Vector_1 />
      <div
        className="w-[95px] h-[85px] flex-shrink-0 bg-[rgb(196,_196,_196)]"
        figma-id="614:382"
      />
      <Ellipse_3 />
    </div>
  );
};
