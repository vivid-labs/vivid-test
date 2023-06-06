import styles from "./DiscordLogo.module.css";
import discordLogo from "./discordLogo.svg";

export const DiscordLogo = ({ style }: { style?: any }) => {
  return (
    <img src={discordLogo.src} style={style} className={styles.discordLogo} />
  );
};
