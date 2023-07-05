import twitterLogo from "./twitterLogo.svg";

export const TwitterLogo = ({ override }: { override?: any }) => {
  return (
    <img
      src={twitterLogo.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
