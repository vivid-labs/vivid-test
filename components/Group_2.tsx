import figmaScreen_1 from "./figmaScreen_1.png";
import vsCodeScreen_1 from "./vsCodeScreen_1.png";
export const Group_2 = ({ override }: { override?: any }) => {
  return (
    <div className="w-full" style={override}>
      <div
        className="absolute -bottom-[113.5px] -right-[707px] left-[707px] top-[113.5px] h-auto w-auto overflow-hidden rounded-[5px]"
        style={{
          boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.30)",
        }}
      >
        <div className="absolute h-[455px] w-[598px] [rotate:-4deg]" />
        <img
          className="absolute left-[41px] top-[58.5px] h-[200px] w-[350px] object-cover"
          src={figmaScreen_1.src}
        />
        <img
          className="absolute left-[141px] top-[192.5px] h-[199px] w-[350px] object-cover"
          src={vsCodeScreen_1.src}
        />
      </div>
    </div>
  );
};
