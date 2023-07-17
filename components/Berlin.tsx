import berlin from "./berlin.jpg";
export const Berlin = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-start gap-[10px] relative h-[563.76px]"
      figma-id="1201:1544"
    >
      <img
        src={berlin.src}
        className="w-[23.5rem] h-full flex-shrink-0 object-cover opacity-100 rounded-[20px]"
        figma-id="1201:1545"
      />
    </div>
  );
};
