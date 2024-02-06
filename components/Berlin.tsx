import berlin from "./berlin.png";
export const Berlin = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex items-start h-[564px]" style={override}>
      <img className="w-[376px] h-[564px] object-cover" src={berlin.src} />
    </div>
  );
};
