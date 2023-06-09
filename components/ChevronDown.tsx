import chevronDown from "./chevronDown.svg";

export const ChevronDown = ({ override }: { override?: any }) => {
  return (
    <img src={chevronDown.src} style={override} className="w-24 h-[6rem]" />
  );
};
