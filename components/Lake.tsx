import lake from "./lake.jpg";

export const Lake = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-row justify-start items-start gap-[10px] relative h-[562.43px] bg-[]"
    >
      <img
        src={lake.src}
        className="w-[376px] h-full flex-shrink-0 object-cover opacity-100 rounded-[20px]"
      />
    </div>
  );
};
