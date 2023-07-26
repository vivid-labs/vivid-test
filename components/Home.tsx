import home from "./home.svg";
export const Home = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex justify-center items-center gap-[10px] p-[5px] relative w-8 h-8"
      figma-id="4:6:325"
    >
      <div figma-id="4:6:326">
        <img
          src={home.src}
          className="absolute left-[6px] -right-[6px] w-auto top-[6px] -bottom-[6px] h-auto"
          figma-id="4:6:327"
        />
      </div>
    </div>
  );
};
