export const ProfilePicture = ({ override }: { override?: any }) => {
  return (
    <div className="flex items-start" style={override}>
      <div className="h-[45px] w-[45px] flex-shrink-0 overflow-hidden rounded-full bg-[rgb(193,_193,_193)]" />
    </div>
  );
};
