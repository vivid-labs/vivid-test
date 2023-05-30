import styles from "./XSimilarCommunitiesCard.module.css";
import { XButtonMediumFixed } from "./XButtonMediumFixed";
import { XAvatarCircle } from "./XAvatarCircle";

export const XSimilarCommunitiesCard = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xSimilarCommunitiesCard0}>
      <p className={styles.xSimilarCommunitiesCard1}>Vkontakte</p>
      <p className={styles.xSimilarCommunitiesCard2}>Образование</p>
      <XButtonMediumFixed
        style={{
          height: "30px",
          width: "132px",
        }}
      />
      <XAvatarCircle
        style={{
          height: "86px",
          width: "86px",
        }}
      />
    </div>
  );
};
