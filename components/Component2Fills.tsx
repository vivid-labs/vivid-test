import frame_2 from "./frame_2.png";
export const Component2Fills = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative h-[300px] w-full flex-shrink-0 overflow-hidden bg-white"
      style={override}
    >
      <div className="absolute left-0 top-0 h-[300px] w-[300px] overflow-hidden">
        <img
          className="absolute h-full w-full object-cover"
          src={frame_2.src}
        />
        <div className="absolute h-full w-full bg-[rgba(0,_0,_0,_0.2)]" />
      </div>
    </div>
  );
};
