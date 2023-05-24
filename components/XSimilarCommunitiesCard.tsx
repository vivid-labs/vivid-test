import styles from "./XSimilarCommunitiesCard.module.css";
import { XButtonMediumFixed } from "./XButtonMediumFixed";
import { XAvatarCircle } from "./XAvatarCircle";

export const XSimilarCommunitiesCard = () => {
  return (
    <div className={styles.xSimilarCommunitiesCard0}>
      <div className={styles.xSimilarCommunitiesCard1} />
      <p className={styles.xSimilarCommunitiesCard2}>Vkontakte</p>
      <p className={styles.xSimilarCommunitiesCard3}>Образование</p>
      <XButtonMediumFixed />
      <XAvatarCircle />
    </div>
  );
};
