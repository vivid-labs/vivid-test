import rocketLaunch from "./rocketLaunch.svg";
export const RocketLaunch = ({ override }: { override?: any }) => {
  return (
    <img
      src={rocketLaunch.src}
      style={override}
      className="w-8 h-8"
      figma-id="7:1423:1464"
    />
  );
};
