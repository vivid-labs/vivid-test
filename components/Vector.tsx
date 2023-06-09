import vector from "./vector.svg";

export const Vector = ({ override }: { override?: any }) => {
  return (
    <img
      src={vector.src}
      style={override}
      className="w-[18px] h-[18px] flex-shrink-0"
    />
  );
};
