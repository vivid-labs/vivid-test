import styles from "./CtaBlockPage.module.css";
import { Button } from "./Button";
import vivid_66a2b8b5c6ba from "./66a2b8b5c6ba.svg";

export const CtaBlockPage = () => {
  return (
    <div>
      <div className={styles.ctaBlockPage0}>
        <div className={styles.ctaBlockPage1}>
          <div className={styles.ctaBlockPage2}>
            <p className={styles.ctaBlockPage3}>Let’s make things happen</p>
            <p className={styles.ctaBlockPage4}>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button property_1="Button primary" />
          </div>
        </div>
        <div className={styles.ctaBlockPage5}>
          <img src={vivid_66a2b8b5c6ba.src} className={styles.ctaBlockPage6} />
        </div>
      </div>
    </div>
  );
};
