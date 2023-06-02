import styles from "./RightPage.module.css";
import globe from "./globe.svg";
import menu from "./menu.svg";
import icon from "./icon.svg";

export const RightPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.rightPage}>
      <p className={styles.title}>Become a Host</p>
      <img src={globe.src} className={styles.globe} />
      <div className={styles.profileDropdown}>
        <img src={menu.src} className={styles.menu} />
        <div className={styles.avatar}>
          <div className={styles.avatarBase}>
            <img src={icon.src} className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};
