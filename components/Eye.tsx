import eye from "./eye.svg";
export const Eye = ({ override }: { override?: any }) => {
  return (
    <img
      src={eye.src}
      style={override}
      className="w-8 h-8"
      figma-id="7:1423:1364"
    />
  );
};
