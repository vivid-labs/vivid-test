import styles from "./AppleDirectoryPage.module.css";

export const AppleDirectoryPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.appleDirectoryPage}>
      <div className={styles.div}>
        <div className={styles.divDiv}>
          <p className={styles.shopAndLearn}>Shop and Learn</p>
          <div className={styles.ulFooterDirectoryColumnSectionProducts}>
            <p className={styles.store}>Store</p>
            <p className={styles.mac}>Mac</p>
            <p className={styles.iPad}>iPad</p>
            <p className={styles.iPhone}>iPhone</p>
            <p className={styles.watch}>Watch</p>
            <p className={styles.airPods}>AirPods</p>
            <p className={styles.tvAndHome}>TV &amp; Home</p>
            <p className={styles.airTag}>AirTag</p>
            <p className={styles.accessories}>Accessories</p>
            <p className={styles.giftCards}>Gift Cards</p>
          </div>
        </div>
        <div className={styles.divDiv1}>
          <p className={styles.appleWallet}>Apple Wallet</p>
          <div className={styles.ulFooterDirectoryColumnSectionApplewallet}>
            <p className={styles.wallet}>Wallet</p>
            <p className={styles.appleCard}>Apple Card</p>
            <p className={styles.applePay}>Apple Pay</p>
            <p className={styles.appleCash}>Apple Cash</p>
          </div>
        </div>
      </div>
      <div className={styles.divDiv2}>
        <div className={styles.divDiv3}>
          <p className={styles.account}>Account</p>
          <div className={styles.ulFooterDirectoryColumnSectionAccounts}>
            <p className={styles.manageYourAppleId}>Manage Your Apple ID</p>
            <p className={styles.appleStoreAccount}>Apple Store Account</p>
            <p className={styles.iCloudCom}>iCloud.com</p>
          </div>
        </div>
        <div className={styles.divDiv4}>
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
      </div>
      <div className={styles.divDiv5}>
        <p className={styles.appleStore}>Apple Store</p>
        <div className={styles.ulFooterDirectoryColumnSectionStoreservices}>
          <p className={styles.findAStore}>Find a Store</p>
          <p className={styles.geniusBar}>Genius Bar</p>
          <p className={styles.todayAtApple}>Today at Apple</p>
          <p className={styles.appleCamp}>Apple Camp</p>
          <p className={styles.appleStoreApp}>Apple Store App</p>
          <p className={styles.certifiedRefurbished}>Certified Refurbished</p>
          <p className={styles.appleTradeIn}>Apple Trade In</p>
          <p className={styles.financing}>Financing</p>
          <p className={styles.carrierDealsAtApple}>Carrier Deals at Apple</p>
          <p className={styles.orderStatus}>Order Status</p>
          <p className={styles.shoppingHelp}>Shopping Help</p>
        </div>
      </div>
      <div className={styles.divDiv6}>
        <div className={styles.divDiv7}>
          <p className={styles.forBusiness}>For Business</p>
          <div className={styles.ulFooterDirectoryColumnSectionBusiness}>
            <p className={styles.appleAndBusiness}>Apple and Business</p>
            <p className={styles.shopForBusiness}>Shop for Business</p>
          </div>
        </div>
        <div className={styles.divDiv8}>
          <p className={styles.forEducation}>For Education</p>
          <div className={styles.ulFooterDirectoryColumnSectionEducation}>
            <p className={styles.appleAndEducation}>Apple and Education</p>
            <p className={styles.shopForK_12}>Shop for K-12</p>
            <p className={styles.shopForCollege}>Shop for College</p>
          </div>
        </div>
        <div className={styles.divDiv9}>
          <p className={styles.forHealthcare}>For Healthcare</p>
          <div className={styles.ulFooterDirectoryColumnSectionHealthcare}>
            <p className={styles.appleInHealthcare}>Apple in Healthcare</p>
            <p className={styles.healthOnAppleWatch}>Health on Apple Watch</p>
            <p className={styles.healthRecordsOnIPhone}>
              Health Records on iPhone
            </p>
          </div>
        </div>
        <div className={styles.divDiv10}>
          <p className={styles.forGovernment}>For Government</p>
          <div className={styles.ulFooterDirectoryColumnSectionGovernment}>
            <p className={styles.shopForGovernment}>Shop for Government</p>
            <p className={styles.shopForVeteransAndMilitary}>
              Shop for Veterans and Military
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divDiv11}>
        <div className={styles.divDiv12}>
          <p className={styles.appleValues}>Apple Values</p>
          <div className={styles.ulFooterDirectoryColumnSectionResponsibility}>
            <p className={styles.accessibility}>Accessibility</p>
            <p className={styles.education}>Education</p>
            <p className={styles.environment}>Environment</p>
            <p className={styles.inclusionAndDiversity}>
              Inclusion and Diversity
            </p>
            <p className={styles.privacy}>Privacy</p>
            <p className={styles.racialEquityAndJustice}>
              Racial Equity and Justice
            </p>
            <p className={styles.supplierResponsibility}>
              Supplier Responsibility
            </p>
          </div>
        </div>
        <div className={styles.divDiv13}>
          <p className={styles.aboutApple}>About Apple</p>
          <div className={styles.ulFooterDirectoryColumnSectionAbout}>
            <p className={styles.newsroom}>Newsroom</p>
            <p className={styles.appleLeadership}>Apple Leadership</p>
            <p className={styles.careerOpportunities}>Career Opportunities</p>
            <p className={styles.investors}>Investors</p>
            <p className={styles.ethicsAndCompliance}>
              Ethics &amp; Compliance
            </p>
            <p className={styles.events}>Events</p>
            <p className={styles.contactApple}>Contact Apple</p>
          </div>
        </div>
      </div>
    </div>
  );
};
