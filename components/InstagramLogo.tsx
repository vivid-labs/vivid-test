import instagramLogo from "./instagramLogo.svg";

export const InstagramLogo = ({ override }: { override?: any }) => {
  return (
    <img
      src={instagramLogo.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
