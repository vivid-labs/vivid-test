import styles from "./Footer.module.css";
import { Link } from "./Link";

export const Footer = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.footer0}>
      <div className={styles.footer1}>
        <div className={styles.footer2}>
          <p className={styles.footer3}>MilanTour</p>
          <p className={styles.footer4}>
            Our vision is to provide convenience
            <br />
            and help you to find your best place for traveling
          </p>
        </div>
        <div className={styles.footer5}>
          <div className={styles.footer6}>
            <p className={styles.footer7}>About</p>
            <Link linkText="Travels" />
            <Link linkText="Partnership" />
            <Link linkText="How to Travel" />
            <Link linkText="Our plans" />
          </div>
          <div className={styles.footer8}>
            <p className={styles.footer9}>Community</p>
            <Link linkText="Events" />
            <Link linkText="Blog" />
            <Link linkText="Podcast" />
            <Link linkText="Invite a Friend" />
          </div>
          <div className={styles.footer10}>
            <p className={styles.footer11}>Socials</p>
            <Link linkText="Facebook" />
            <Link linkText="Instagram" />
            <Link linkText="Twitter" />
            <Link linkText="Discord" />
          </div>
        </div>
      </div>
      <div className={styles.footer12}>
        <p className={styles.footer13}>2023 MilanTour. All rights reserved</p>
        <div className={styles.footer14}>
          <Link linkText="Privacy Policy" />
          <Link linkText="Terms & Conditions" />
        </div>
      </div>
    </div>
  );
};
