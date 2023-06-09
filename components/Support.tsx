import support from "./support.svg";

export const Support = ({ override }: { override?: any }) => {
  return <img src={support.src} style={override} className="w-20 h-[5rem]" />;
};
