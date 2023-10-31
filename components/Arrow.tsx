import arrow from "./arrow.svg";
export const Arrow = ({ override }: { override?: React.CSSProperties }) => {
  return <img className="w-[7px] h-[3px]" src={arrow.src} style={override} />;
};
