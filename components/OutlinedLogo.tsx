import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override}>
      <img src={vividLogoV2_2.src} />
    </div>
  );
};
