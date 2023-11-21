import styles from "./Footer.module.css";
import { Link } from "./Link";
export const Footer = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.footerComponent} style={override}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.milanTour}>MilanTour</p>
          <p
            className={
              styles.ourVisionIsToProvideConvenienceAndHelpYouToFindYourBestPlaceForTraveling
            }
          >
            Our vision is to provide convenience
            <br />
            and help you to find your best place for traveling
          </p>
        </div>
        <div className={styles.quickAcces}>
          <div className={styles.about}>
            <p className={styles.aboutText}>About</p>
            <Link linkText="Travels" />
            <Link linkText="Partnership" />
            <Link linkText="How to Travel" />
            <Link linkText="Our plans" />
          </div>
          <div className={styles.community}>
            <p className={styles.communityText}>Community</p>
            <Link linkText="Events" />
            <Link linkText="Blog" />
            <Link linkText="Podcast" />
            <Link linkText="Invite a Friend" />
          </div>
          <div className={styles.socials}>
            <p className={styles.socialsText}>Socials</p>
            <Link linkText="Facebook" />
            <Link linkText="Instagram" />
            <Link linkText="Twitter" />
            <Link linkText="Discord" />
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <p className={styles.text2023MilanTourAllRightsReserved}>
          2023 MilanTour. All rights reserved
        </p>
        <div className={styles.privacy}>
          <Link linkText="Privacy Policy" />
          <Link linkText="Terms & Conditions" />
        </div>
      </div>
    </div>
  );
};
