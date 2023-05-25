import styles from "./XSimilarCommunitiesCard.module.css";
import { XButtonMediumFixed } from "./XButtonMediumFixed";
import { XAvatarCircle } from "./XAvatarCircle";

export const XSimilarCommunitiesCard = () => {
  return (
    <div className={styles.xSimilarCommunitiesCard0}>
      <p className={styles.xSimilarCommunitiesCard1}>Vkontakte</p>
      <p className={styles.xSimilarCommunitiesCard2}>Образование</p>
      <XButtonMediumFixed />
      <XAvatarCircle />
    </div>
  );
};
