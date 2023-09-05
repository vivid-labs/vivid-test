import closeIcon from "./closeIcon.svg";
export const CloseIcon = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-4 h-4" src={closeIcon.src} style={override} />;
};
