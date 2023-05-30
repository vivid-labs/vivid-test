import styles from "./CommunitiesContainerInfo.module.css";
import vivid_1beb7fa401dd from "./1beb7fa401dd.svg";
import { XTextGroupInfo } from "./XTextGroupInfo";
import { XMainContainerTextPhone } from "./XMainContainerTextPhone";
import { XMainContainerTextLocation } from "./XMainContainerTextLocation";

export const CommunitiesContainerInfo = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesContainerInfo0}>
      <div className={styles.communitiesContainerInfo1}>
        <p className={styles.communitiesContainerInfo2}>Adobe Illustrator</p>
        <p className={styles.communitiesContainerInfo3}>
          Программное обеспечение
        </p>
      </div>
      <img
        src={vivid_1beb7fa401dd.src}
        className={styles.communitiesContainerInfo4}
      />
      <div className={styles.communitiesContainerInfo5}>
        <p className={styles.communitiesContainerInfo6}>Информация</p>
      </div>
      <img
        src={vivid_1beb7fa401dd.src}
        className={styles.communitiesContainerInfo7}
      />
      <div className={styles.communitiesContainerInfo8}>
        <XTextGroupInfo />
        <XTextGroupInfo />
        <XMainContainerTextPhone />
        <XMainContainerTextLocation />
      </div>
    </div>
  );
};
