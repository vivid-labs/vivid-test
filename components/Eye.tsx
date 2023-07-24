import eye from "./eye.svg";
export const Eye = ({ override }: { override?: any }) => {
  return (
    <img
      src={eye.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
      figma-id="7:1423:1364"
    />
  );
};
