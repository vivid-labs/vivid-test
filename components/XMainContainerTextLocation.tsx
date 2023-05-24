import styles from "./XMainContainerTextLocation.module.css";
import { XTextGroupInfo } from "./XTextGroupInfo";
import vivid_867e983dc1495efc0807218821a11e3f11cf2960 from "./867e983dc1495efc0807218821a11e3f11cf2960.png";
import { XAvatarCircle } from "./XAvatarCircle";

export const XMainContainerTextLocation = () => {
  return (
    <div className={styles.xMainContainerTextLocation0}>
      <XTextGroupInfo />
      <p className={styles.xMainContainerTextLocation1}>Все 3 адреса</p>
      <img
        src={vivid_867e983dc1495efc0807218821a11e3f11cf2960.src}
        className={styles.xMainContainerTextLocation2}
      />
      <XAvatarCircle />
    </div>
  );
};
