export const Divider = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="relative w-10 h-px" style={override}>
      <div className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full bg-[rgb(217,_217,_217)]" />
    </div>
  );
};
