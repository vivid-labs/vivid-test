import styles from "./Footer.module.css";
import { Link } from "./Link";

export const Footer = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerTitle}>
        <p className={styles.footerTitleText}>MilanTour</p>
        <p
          className={
            styles.footerSubtitle
          }
        >
          Our vision is to provide convenience
          <br />
          and help you to find your best place for traveling
        </p>
      </div>
      <div className={styles.quickAccess}>
        <div className={styles.aboutSection}>
          <p className={styles.aboutText}>About</p>
          <Link linkText="Travels" />
          <Link linkText="Partnership" />
          <Link linkText="How to Travel" />
          <Link linkText="Our plans" />
        </div>
        <div className={styles.communitySection}>
          <p className={styles.communityText}>Community</p>
          <Link linkText="Events" />
          <Link linkText="Blog" />
          <Link linkText="Podcast" />
          <Link linkText="Invite a Friend" />
        </div>
        <div className={styles.socialsSection}>
          <p className={styles.socialsText}>Socials</p>
          <Link linkText="Facebook" />
          <Link linkText="Instagram" />
          <Link linkText="Twitter" />
          <Link linkText="Discord" />
        </div>
      </div>
    </div>
    <div className={styles.rightsSection}>
      <p className={styles.rightsText}>
        2023 MilanTour. All rights reserved
      </p>
      <div className={styles.privacySection}>
        <Link linkText="Privacy Policy" />
        <Link linkText="Terms & Conditions" />
      </div>
    </div>
   </div> 
  );
};
