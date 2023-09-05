import bagIcon from "./bagIcon.svg";
export const BagIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className="w-[15px] h-[18px]" src={bagIcon.src} style={override} />
  );
};
