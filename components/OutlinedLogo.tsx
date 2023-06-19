import vividLogoV2_2 from "./vividLogoV2_2.png";

export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-[62px] h-[62px]">
      <img
        src={vividLogoV2_2.src}
        className="absolute object-cover opacity-100"
      />
    </div>
  );
};
