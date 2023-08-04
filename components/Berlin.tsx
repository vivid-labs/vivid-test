import berlin from "./berlin.png";
export const Berlin = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="flex h-[564px] items-start" style={override}>
      <img
        className="h-[564px] w-[376px] flex-shrink-0 object-cover"
        src={berlin.src}
      />
    </div>
  );
};
