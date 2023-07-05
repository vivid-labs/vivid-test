import discordLogo from "./discordLogo.svg";
export const DiscordLogo = ({ override }: { override?: any }) => {
  return (
    <img
      src={discordLogo.src}
      style={{
        width: "32px",
        height: "32px",
        ...override,
      }}
    />
  );
};
