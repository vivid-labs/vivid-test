import styles from "./SectionPage.module.css";

export const SectionPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.sectionPage}>
      <div className={styles.div}>
        <p
          className={
            styles.moreWaysToShopFindAnAppleStoreOrOtherRetailerNearYou
          }
        >
          More ways to shop: Find an Apple Store or other retailer near you.
        </p>
        <p className={styles.orCall_1_800MyApple}>Or call 1-800-MY-APPLE.</p>
      </div>
      <div className={styles.divDiv}>
        <p className={styles.copyrightCopyright_2023AppleIncAllRightsReserved}>
          Copyright © 2023 Apple Inc. All rights reserved.
        </p>
        <div className={styles.ul}>
          <div className={styles.li}>
            <p className={styles.privacyPolicy}>Privacy Policy</p>
          </div>
          <div className={styles.liDiv}>
            <p className={styles.termsOfUse}>Terms of Use</p>
          </div>
          <div className={styles.liDiv1}>
            <p className={styles.salesAndRefunds}>Sales and Refunds</p>
          </div>
          <div className={styles.liDiv2}>
            <p className={styles.legal}>Legal</p>
          </div>
          <p className={styles.siteMap}>Site Map</p>
        </div>
      </div>
      <p className={styles.unitedStates}>United States</p>
    </div>
  );
};
