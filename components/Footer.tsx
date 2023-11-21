import styles from "./Footer.module.css";
import { Link } from "./Link";
export const Footer = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.footerComponentClass} style={override}>
    <div className={styles.contentClass}>
      <div className={styles.titleClass}>
        <p className={styles.milanTourClass}>MilanTour</p>
        <p
          className={
            styles.ourVisionClass
          }
        >
          Our vision is to provide convenience
          <br />
          and help you to find your best place for traveling
        </p>
      </div>
      <div className={styles.quickAccessClass}>
        <div className={styles.aboutClass}>
          <p className={styles.aboutTextClass}>About</p>
          <Link linkText="Travels" />
          <Link linkText="Partnership" />
          <Link linkText="How to Travel" />
          <Link linkText="Our plans" />
        </div>
        <div className={styles.communityClass}>
          <p className={styles.communityTextClass}>Community</p>
          <Link linkText="Events" />
          <Link linkText="Blog" />
          <Link linkText="Podcast" />
          <Link linkText="Invite a Friend" />
        </div>
        <div className={styles.socialsClass}>
          <p className={styles.socialsTextClass}>Socials</p>
          <Link linkText="Facebook" />
          <Link linkText="Instagram" />
          <Link linkText="Twitter" />
          <Link linkText="Discord" />
        </div>
      </div>
    </div>
    <div className={styles.rightsClass}>
      <p className={styles.text2023MilanTourAllRightsReservedClass}>
        2023 MilanTour. All rights reserved
      </p>
      <div className={styles.privacyClass}>
        <Link linkText="Privacy Policy" />
        <Link linkText="Terms & Conditions" />
      </div>
    </div>
   </div> 
  );
};
