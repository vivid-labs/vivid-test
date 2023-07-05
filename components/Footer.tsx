import styles from "./Footer.module.css";
import { Link } from "./Link";
export const Footer = ({ override }: { override?: any }) => {
  const linkProps = [
    {
      linkText: "Travels",
    },
    {
      linkText: "Partnership",
    },
    {
      linkText: "How to Travel",
    },
    {
      linkText: "Our plans",
    },
  ];
  const linkProps = [
    {
      linkText: "Events",
    },
    {
      linkText: "Blog",
    },
    {
      linkText: "Podcast",
    },
    {
      linkText: "Invite a Friend",
    },
  ];
  const linkProps = [
    {
      linkText: "Facebook",
    },
    {
      linkText: "Instagram",
    },
    {
      linkText: "Twitter",
    },
    {
      linkText: "Discord",
    },
  ];
  return (
    <div style={override} className={styles.footer}>
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
            {linkProps.map((props, i) => (
              <Link {...props} key={i} />
            ))}
          </div>
          <div className={styles.community}>
            <p className={styles.communityText}>Community</p>
            {linkProps.map((props, i) => (
              <Link {...props} key={i} />
            ))}
          </div>
          <div className={styles.socials}>
            <p className={styles.socialsText}>Socials</p>
            {linkProps.map((props, i) => (
              <Link {...props} key={i} />
            ))}
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
