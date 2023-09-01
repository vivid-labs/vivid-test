import closeIcon from "./closeIcon.svg";
export const CloseIcon = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-[18px] h-5" src={closeIcon.src} style={override} />;
};
