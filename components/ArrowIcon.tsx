import arrowIcon from "./arrowIcon.svg";
export const ArrowIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className="w-[26px] h-[17px]" src={arrowIcon.src} style={override} />
  );
};
