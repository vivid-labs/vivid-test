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
        className="absolute right-[0%] w-full bottom-[0%] h-full object-cover opacity-100"
        figma-id="8:27:178"
      />
    </div>
  );
};
