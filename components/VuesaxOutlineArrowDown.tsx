import arrowDown from "./arrowDown.svg";
export const VuesaxOutlineArrowDown = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-5 h-5" figma-id="1201:6724">
      <div figma-id="1201:6725">
        <img
          src={arrowDown.src}
          className="absolute right-[0rem] w-auto bottom-[0rem] h-auto"
          figma-id="1201:6726"
        />
      </div>
    </div>
  );
};
