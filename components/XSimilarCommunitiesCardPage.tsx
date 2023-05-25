import styles from "./XSimilarCommunitiesCardPage.module.css";
import { XButtonMediumFixed } from "./XButtonMediumFixed";
import { XAvatarCircle } from "./XAvatarCircle";

export const XSimilarCommunitiesCardPage = () => {
  return (
    <div className={styles.xSimilarCommunitiesCardPage0}>
      <div className={styles.xSimilarCommunitiesCardPage1} />
      <p className={styles.xSimilarCommunitiesCardPage2}>Vkontakte</p>
      <p className={styles.xSimilarCommunitiesCardPage3}>Образование</p>
      <XButtonMediumFixed />
      <XAvatarCircle />
    </div>
  );
};
