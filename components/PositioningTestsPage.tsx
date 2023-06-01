import styles from "./PositioningTestsPage.module.css";
import lake from "./lake.jpg";
import camping from "./camping.png";
import jungle from "./jungle.jpg";

export const PositioningTestsPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.positioningTestsPage}>
      <div>
        <div className={styles.city}>
          <div className={styles.background}>
            <div className={styles.lake}>
              <img src={lake.src} className={styles.lakeImage} />
            </div>
          </div>
        </div>
        <div className={styles.cityDiv}>
          <div className={styles.backgroundDiv}>
            <div className={styles.camping}>
              <img src={camping.src} className={styles.campingImage} />
            </div>
          </div>
        </div>
        <div className={styles.cityDiv1}>
          <div className={styles.backgroundDiv1}>
            <div className={styles.jungle}>
              <img src={jungle.src} className={styles.jungleImage} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.simplifiedFrameImages}>
        <div className={styles.cityDiv2} />
        <div className={styles.cityDiv3} />
        <div className={styles.cityDiv4} />
      </div>
      <div className={styles.frameImages}>
        <div className={styles.cityDiv5}>
          <div className={styles.backgroundDiv2}>
            <div className={styles.lakeDiv}>
              <img src={lake.src} className={styles.lakeImage1} />
            </div>
          </div>
        </div>
        <div className={styles.cityDiv6}>
          <div className={styles.backgroundDiv3}>
            <div className={styles.campingDiv}>
              <img src={camping.src} className={styles.campingImage1} />
            </div>
          </div>
        </div>
        <div className={styles.cityDiv7}>
          <div className={styles.backgroundDiv4}>
            <div className={styles.jungleDiv}>
              <img src={jungle.src} className={styles.jungleImage1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
