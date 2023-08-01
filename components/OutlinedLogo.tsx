import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "62px",
        height: "62px",
        ...override,
      }}
    >
      <img
        style={{
          position: "absolute",
          left: "0%",
          right: "0%",
          width: "100%",
          top: "0%",
          bottom: "0%",
          height: "100%",
          objectFit: "cover",
        }}
        src={vividLogoV2_2.src}
      />
    </div>
  );
};
