import berlin from "./berlin.jpg";

export const Berlin = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-row justify-start items-start gap-[10px] relative h-[563.76px] bg-[]"
    >
      <img
        src={berlin.src}
        className="w-[376px] h-full flex-shrink-0 object-cover opacity-100 rounded-[20px]"
      />
    </div>
  );
};
