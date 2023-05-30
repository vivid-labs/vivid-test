import styles from "./FooterPage.module.css";

export const FooterPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.footerPage0}>
      <div className={styles.footerPage1}>
        <div className={styles.footerPage2}>
          <p className={styles.footerPage3}>MilanTour</p>
          <p className={styles.footerPage4}>
            Our vision is to provide convenience
            <br />
            and help you to find your best place for traveling
          </p>
        </div>
        <div className={styles.footerPage5}>
          <div className={styles.footerPage6}>
            <p className={styles.footerPage7}>About</p>
            <p className={styles.footerPage8}>Traveles</p>
            <p className={styles.footerPage9}>Partnership</p>
            <p className={styles.footerPage10}>How to travel</p>
            <p className={styles.footerPage11}>Our plans</p>
          </div>
          <div className={styles.footerPage12}>
            <p className={styles.footerPage13}>Community</p>
            <p className={styles.footerPage14}>Events</p>
            <p className={styles.footerPage15}>Blog</p>
            <p className={styles.footerPage16}>Podcast</p>
            <p className={styles.footerPage17}>Invite a friend</p>
          </div>
          <div className={styles.footerPage18}>
            <p className={styles.footerPage19}>Socials</p>
            <p className={styles.footerPage20}>Discord</p>
            <p className={styles.footerPage21}>Instagram</p>
            <p className={styles.footerPage22}>Twitter</p>
            <p className={styles.footerPage23}>Facebook</p>
          </div>
        </div>
      </div>
      <div className={styles.footerPage24}>
        <p className={styles.footerPage25}>
          2023 MilanTour. All rights reserved
        </p>
        <div className={styles.footerPage26}>
          <p className={styles.footerPage27}>Privacy & Policy</p>
          <p className={styles.footerPage28}>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};
