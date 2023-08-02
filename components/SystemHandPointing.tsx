import systemHandPointing from "./systemHandPointing.svg";
export const SystemHandPointing = ({ override }: { override?: any }) => {
  return (
    <img
      className="w-[42px] h-[42px]"
      src={systemHandPointing.src}
      style={override}
    />
  );
};
