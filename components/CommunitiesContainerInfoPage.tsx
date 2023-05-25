import styles from "./CommunitiesContainerInfoPage.module.css";
import vivid_1beb7fa401dd from "./1beb7fa401dd.svg";
import { XTextGroupInfo } from "./XTextGroupInfo";
import { XMainContainerTextPhone } from "./XMainContainerTextPhone";
import { XMainContainerTextLocation } from "./XMainContainerTextLocation";

export const CommunitiesContainerInfoPage = () => {
  return (
    <div className={styles.communitiesContainerInfoPage0}>
      <div className={styles.communitiesContainerInfoPage1}>
        <p className={styles.communitiesContainerInfoPage2}>
          Adobe Illustrator
        </p>
        <p className={styles.communitiesContainerInfoPage3}>
          Программное обеспечение
        </p>
      </div>
      <img
        src={vivid_1beb7fa401dd.src}
        className={styles.communitiesContainerInfoPage4}
      />
      <div className={styles.communitiesContainerInfoPage5}>
        <p className={styles.communitiesContainerInfoPage6}>Информация</p>
      </div>
      <img
        src={vivid_1beb7fa401dd.src}
        className={styles.communitiesContainerInfoPage7}
      />
      <div className={styles.communitiesContainerInfoPage8}>
        <XTextGroupInfo />
        <XTextGroupInfo />
        <XMainContainerTextPhone />
        <XMainContainerTextLocation />
      </div>
    </div>
  );
};
