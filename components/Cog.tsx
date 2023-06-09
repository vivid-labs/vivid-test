import cog from "./cog.svg";

export const Cog = ({ override }: { override?: any }) => {
  return <img src={cog.src} style={override} className="w-24 h-[6rem]" />;
};
