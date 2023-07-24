import rocketLaunch from "./rocketLaunch.svg";
export const RocketLaunch = ({ override }: { override?: any }) => {
  return (
    <img
      src={rocketLaunch.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
      figma-id="7:1423:1464"
    />
  );
};
