import chevronUp from "./chevronUp.svg";

export const ChevronUp = ({ override }: { override?: any }) => {
  return <img src={chevronUp.src} style={override} className="w-24 h-[6rem]" />;
};
