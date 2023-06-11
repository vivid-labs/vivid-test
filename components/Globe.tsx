import globe from "./globe.svg";

export const Globe = ({ override }: { override?: any }) => {
  return <img src={globe.src} style={override} className="w-24 h-[6rem]" />;
};
