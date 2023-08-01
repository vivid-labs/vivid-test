export const ProfilePicture = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="flex items-start relative">
      <div className="overflow-hidden rounded-full w-[45px] h-[45px] flex-shrink-0 bg-[rgb(193,_193,_193)]" />
    </div>
  );
};
