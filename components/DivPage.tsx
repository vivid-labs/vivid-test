import styles from "./DivPage.module.css";

export const DivPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.divPage}>
      <p className={styles.entertainment}>Entertainment</p>
      <div className={styles.ulFooterDirectoryColumnSectionEntertainment}>
        <p className={styles.appleOne}>Apple One</p>
        <p className={styles.appleTv}>Apple TV+</p>
        <p className={styles.appleMusic}>Apple Music</p>
        <p className={styles.appleArcade}>Apple Arcade</p>
        <p className={styles.appleFitness}>Apple Fitness+</p>
        <p className={styles.appleNews}>Apple News+</p>
        <p className={styles.applePodcasts}>Apple Podcasts</p>
        <p className={styles.appleBooks}>Apple Books</p>
        <p className={styles.appStore}>App Store</p>
      </div>
    </div>
  );
};
