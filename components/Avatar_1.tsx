import styles from "./Avatar_1.module.css";
import avatarPlaceholder from "./avatarPlaceholder.png";
export const Avatar_1 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.avatar_1} figma-id="7:1379:1352">
      <img
        src={avatarPlaceholder.src}
        className={styles.avatarPlaceholder}
        figma-id="7:1379:1351"
      />
    </div>
  );
};
