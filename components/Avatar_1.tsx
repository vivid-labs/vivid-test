import avatarPlaceholder from "./avatarPlaceholder.png";
export const Avatar_1 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-[7.5rem] h-[7.5rem]">
      <img
        src={avatarPlaceholder.src}
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover rounded-[100px]"
      />
    </div>
  );
};
