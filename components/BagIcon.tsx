import bagIcon from "./bagIcon.svg";
export const BagIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className="w-[17px] h-[21px]" src={bagIcon.src} style={override} />
  );
};
