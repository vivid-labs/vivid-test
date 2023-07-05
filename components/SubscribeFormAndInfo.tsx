import styles from "./SubscribeFormAndInfo.module.css";
import { SubscribeWidgetMobile } from "./SubscribeWidgetMobile";
export const SubscribeFormAndInfo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.subscribeFormAndInfo}>
      <p className={styles.getExclusivePromotionsAndUpdatesStraightToYourInbox}>
        Get exclusive promotions &amp; updates straight to your inbox.
      </p>
      <SubscribeWidgetMobile />
    </div>
  );
};
