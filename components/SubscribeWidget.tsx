import styles from "./SubscribeWidget.module.css";
import photo from "./photo.png";
import { SubscribeForm } from "./SubscribeForm";
import { SubscribeWidgetMobile } from "./SubscribeWidgetMobile";
export const SubscribeWidget = ({
  override,
  screen,
}: {
  override?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={override} className={styles.subscribeWidget}>
          <div className={styles.subscribeWidgetDiv}>
            <img src={photo.src} className={styles.photo} />
            <div className={styles.frame_179}>
              <div className={styles.headlineAndSubhead}>
                <p className={styles.joinOurWeeklyDigest}>
                  Join our weekly digest
                </p>
                <p
                  className={
                    styles.getExclusivePromotionsAndUpdatesStraightToYourInbox
                  }
                >
                  Get exclusive promotions &amp; updates straight to your inbox.
                </p>
              </div>
              <SubscribeForm
                property_1="Default"
                email="Enter your email here"
                override={{
                  height: "60px",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div style={override} className={styles.subscribeWidgetComponent}>
          <div className={styles.subscribeWidgetDiv1}>
            <img src={photo.src} className={styles.photoImage} />
            <div className={styles.frame_179Div}>
              <div className={styles.headlineAndSubheadDiv}>
                <p className={styles.joinOurWeeklyDigestText}>
                  Join our weekly digest
                </p>
                <p
                  className={
                    styles.getExclusivePromotionsAndUpdatesStraightToYourInboxText
                  }
                >
                  Get exclusive promotions &amp; updates straight to your inbox.
                </p>
              </div>
              <SubscribeWidgetMobile
                override={{
                  height: "fit-content",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={override} className={styles.subscribeWidgetComponent1}>
          <div className={styles.subscribeWidgetDiv2}>
            <img src={photo.src} className={styles.photoImage1} />
            <div className={styles.frame_179Div1}>
              <div className={styles.headlineAndSubheadDiv1}>
                <p className={styles.joinOurWeeklyDigestText1}>
                  Join our weekly digest
                </p>
                <p
                  className={
                    styles.getExclusivePromotionsAndUpdatesStraightToYourInboxText1
                  }
                >
                  Get exclusive promotions &amp; updates straight to your inbox.
                </p>
              </div>
              <SubscribeWidgetMobile
                override={{
                  height: "fit-content",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
