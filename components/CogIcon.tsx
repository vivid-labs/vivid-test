import cogIcon from "./cogIcon.svg";
export const CogIcon = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-4 h-4" src={cogIcon.src} style={override} />;
};
