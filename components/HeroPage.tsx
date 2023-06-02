import styles from "./HeroPage.module.css";
import { AirbnbNav } from "./AirbnbNav";
import { AirbnbSearch } from "./AirbnbSearch";
import bigCard from "./bigCard.jpg";

export const HeroPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.heroPage}>
      <AirbnbNav version="Home" />
      <AirbnbSearch type="Full" />
      <div className={styles.bigCard}>
        <img
          src={bigCard.src}
          className={
            styles.transformRotate0_00degScale100_00pc_133_36pcTranslate0_00pc_24_58pcTransformOriginTopLeftOpacity_1802196a683d8b4f496c94cf0a33728d8f6e90e4b
          }
        />
        <p className={styles.notSureWhereToGoqPerfect}>
          Not sure where to go? Perfect.
        </p>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <p className={styles.text}>I’m flexible</p>
          </div>
        </div>
      </div>
    </div>
  );
};
