import styles from "./AirbnbNav.module.css";
import logoImage from "./logoImage.svg";
import globeImage from "./globeImage.svg";
import menu from "./menu.svg";
import iconImage2 from "./iconImage2.svg";
import logo from "./logo.svg";
import dividerImage2 from "./dividerImage2.svg";
import iconImage from "./iconImage.svg";
import globe from "./globe.svg";
import iconImage1 from "./iconImage1.svg";

export const AirbnbNav = ({
  style,
  version,
}: {
  style?: any;
  version: string;
}) => {
  switch (version) {
    case "Home":
      return (
        <div style={style} className={styles.airbnbNav}>
          <img src={logoImage.src} className={styles.logo} />
          <div className={styles.pages}>
            <div className={styles.page}>
              <p className={styles.title}>Places to stay</p>
              <div className={styles.line} />
            </div>
            <div className={styles.pageDiv}>
              <p className={styles.titleText}>Experiences</p>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.pageDiv1}>
              <p className={styles.titleText1}>Online Experiences</p>
              <div className={styles.lineDiv1} />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.titleText2}>Become a Host</p>
            <img src={globeImage.src} className={styles.globe} />
            <div className={styles.profileDropdown}>
              <img src={menu.src} className={styles.menu} />
              <div className={styles.avatar}>
                <div className={styles.avatarBase}>
                  <img src={iconImage2.src} className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "Search":
      return (
        <div style={style} className={styles.airbnbNavComponent}>
          <img src={logo.src} className={styles.logoImage} />
          <div className={styles.airbnbSearch}>
            <div className={styles.attribute}>
              <p className={styles.value}>Bordeaux</p>
            </div>
            <img src={dividerImage2.src} className={styles.divider} />
            <div className={styles.attributeDiv}>
              <p className={styles.valueText}>Feb 19-26</p>
            </div>
            <img src={dividerImage2.src} className={styles.dividerImage} />
            <div className={styles.attributeDiv1}>
              <p className={styles.valueText1}>2 guests</p>
            </div>
            <div className={styles.iconButton}>
              <div className={styles.iconButtonBase}>
                <img src={iconImage.src} className={styles.iconImage} />
              </div>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <p className={styles.titleText3}>Become a Host</p>
            <img src={globe.src} className={styles.globeImage} />
            <div className={styles.profileDropdownDiv}>
              <img src={menu.src} className={styles.menuImage} />
              <div className={styles.avatarDiv}>
                <div className={styles.avatarBaseDiv}>
                  <img src={iconImage1.src} className={styles.iconImage1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
