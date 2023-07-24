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
      figma-id="8:27:195"
    >
      <img
        style={{
          position: "absolute",
          right: "0%",
          width: "100%",
          bottom: "0%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
        }}
        src={vividLogoV2_2.src}
        figma-id="8:27:178"
      />
    </div>
  );
};
