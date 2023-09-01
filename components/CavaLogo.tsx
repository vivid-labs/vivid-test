import cavaLogo from "./cavaLogo.png";
export const CavaLogo = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="relative w-[71px] h-[23px]" style={override}>
      <img
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        src={cavaLogo.src}
      />
    </div>
  );
};
