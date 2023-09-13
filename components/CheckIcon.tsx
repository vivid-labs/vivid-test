import checkIcon from "./checkIcon.svg";
export const CheckIcon = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-3.5 h-3.5" src={checkIcon.src} style={override} />;
};
