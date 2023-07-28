import flipX from "./flipX.png";
export const FlipX = ({ override }: { override?: any }) => {
  return (
    <img
      style={override}
      src={flipX.src}
      className="transform scale-x-[-100%] scale-y-[100%] origin-top-left w-full h-[27.45px] flex-shrink-0 object-cover"
      figma-id="3:1585:934"
    />
  );
};
