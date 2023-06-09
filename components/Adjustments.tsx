import adjustments from "./adjustments.svg";

export const Adjustments = ({ override }: { override?: any }) => {
  return (
    <img src={adjustments.src} style={override} className="w-24 h-[6rem]" />
  );
};
