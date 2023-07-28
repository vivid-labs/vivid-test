import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="relative w-[62px] h-[62px]"
      figma-id="8:27:195"
    >
      <img
        src={vividLogoV2_2.src}
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        figma-id="8:27:178"
      />
    </div>
  );
};
