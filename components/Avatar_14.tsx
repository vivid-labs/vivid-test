import avatarPlaceholderImage from "./avatarPlaceholderImage.png";
export const Avatar_14 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-[7.5rem] h-[7.5rem]">
      <img
        src={avatarPlaceholderImage.src}
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover rounded-[120px]"
      />
    </div>
  );
};
