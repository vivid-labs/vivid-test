import clock from "./clock.svg";

export const Clock = ({ override }: { override?: any }) => {
  return <img src={clock.src} style={override} className="w-20 h-[5rem]" />;
};
