import styles from "./Profile.module.css";
import vivid_dd433957a221d41363eea0fbf5f886c2b2fc13c1 from "./dd433957a221d41363eea0fbf5f886c2b2fc13c1.jpg";

export const Profile = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.profile0}>
      <img
        src={vivid_dd433957a221d41363eea0fbf5f886c2b2fc13c1.src}
        className={styles.profile1}
      />
    </div>
  );
};
