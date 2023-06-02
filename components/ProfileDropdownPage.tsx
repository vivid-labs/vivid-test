import styles from "./ProfileDropdownPage.module.css";
import menu from "./menu.svg";
import icon from "./icon.svg";

export const ProfileDropdownPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.profileDropdownPage}>
      <img src={menu.src} className={styles.menu} />
      <div className={styles.avatar}>
        <div className={styles.avatarBase}>
          <img src={icon.src} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
