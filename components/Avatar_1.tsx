import avatarPlaceholder from "./avatarPlaceholder.png";
export const Avatar_1 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="relative w-[7.5rem] h-[7.5rem]"
      figma-id="7:1379:1352"
    >
      <img
        src={avatarPlaceholder.src}
        className="absolute right-[0%] w-full bottom-[0%] h-full object-cover opacity-100 rounded-[100px]"
        figma-id="7:1379:1351"
      />
    </div>
  );
};
