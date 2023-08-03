import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative h-[62px] w-[62px]"
      style={{
        ...override,
      }}
    >
      <img
        className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full object-cover"
        style={{}}
        src={vividLogoV2_2.src}
      />
    </div>
  );
};
