import { Frame_2 } from "./Frame_2";
export const Frame_1 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col items-start gap-[10px] w-full pr-[10px] pb-[30px] relative flex-shrink-0 bg-[rgb(255,_255,_255)]"
      figma-id="13:1:2"
    >
      <Frame_2 figma-id="13:1:7" />
      <Frame_2 figma-id="13:1:6" />
    </div>
  );
};
