import styles from "./Settings.module.css";
import settings from "./settings.svg";
export const Settings = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
      className={styles.settingsComponent}
      src={settings.src}
      style={override}
    />
  );
};
