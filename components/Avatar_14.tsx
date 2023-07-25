import avatarPlaceholderImage from "./avatarPlaceholderImage.png";
export const Avatar_14 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="relative w-[7.5rem] h-[7.5rem]"
      figma-id="7:1428:1292"
    >
      <img
        src={avatarPlaceholderImage.src}
        className="absolute right-[0%] w-full bottom-[0%] h-full object-cover opacity-100 rounded-[120px]"
        figma-id="7:1397:2470"
      />
    </div>
  );
};
