import youtubeLogo from "./youtubeLogo.svg";
export const YoutubeLogo = ({ override }: { override?: any }) => {
  return (
    <img
      src={youtubeLogo.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
