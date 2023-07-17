import lake from "./lake.jpg";
export const Lake = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-start gap-[10px] relative h-[562.43px]"
      figma-id="1201:1540"
    >
      <img
        src={lake.src}
        className="w-[23.5rem] h-full flex-shrink-0 object-cover opacity-100 rounded-[20px]"
        figma-id="1201:1541"
      />
    </div>
  );
};
