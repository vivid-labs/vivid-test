import styles from "./XMainContainerTextLocation.module.css";
import { XTextGroupInfo } from "./XTextGroupInfo";
import vivid_867e983dc1495efc0807218821a11e3f11cf2960 from "./867e983dc1495efc0807218821a11e3f11cf2960.png";
import { XAvatarCircle } from "./XAvatarCircle";

export const XMainContainerTextLocation = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xMainContainerTextLocation0}>
      <XTextGroupInfo />
      <p className={styles.xMainContainerTextLocation1}>Все 3 адреса</p>
      <img
        src={vivid_867e983dc1495efc0807218821a11e3f11cf2960.src}
        className={styles.xMainContainerTextLocation2}
      />
      <XAvatarCircle
        style={{
          borderWidth: "2px",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "16px",
          height: "24px",
          width: "24px",
          borderColor: "rgb(255, 255, 255)",
          boxShadow: "0px 4px 4px  rgb(0, 0, 0, 0.25)",
        }}
      />
    </div>
  );
};
