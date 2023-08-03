import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div className="relative w-[62px] h-[62px]" style={override}>
      <img
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        src={vividLogoV2_2.src}
      />
    </div>
  );
};
