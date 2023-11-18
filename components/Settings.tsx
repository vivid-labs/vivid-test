import styles from "./Settings.module.css";
import settings from "./settings.svg";
export const Settings = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
     className={styles.settingsImage}
     src={settings.src}
     style={override}
   /> 
  );
};
