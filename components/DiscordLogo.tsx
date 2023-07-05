import styles from "./DiscordLogo.module.css";
import discordLogo from "./discordLogo.svg";

export const DiscordLogo = ({ override }: { override?: any }) => {
  return (
    <img
      src={discordLogo.src}
      style={override}
      className={styles.discordLogo}
    />
  );
};
