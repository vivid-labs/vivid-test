import styles from "./Screen.module.css";
import backArrow from "./backArrow.svg";
import socialIcon from "./socialIcon.svg";
import screenshot_2023_08_10At_7_17_1 from "./screenshot_2023_08_10At_7_17_1.png";
import screenshot_2023_08_10At_7_19_1 from "./screenshot_2023_08_10At_7_19_1.png";
import body from "./body.png";
import { Button } from "./Button";
import group_1 from "./group_1.svg";

export const Screen = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.screenComponent} style={override}>
      <div className={styles.controls}>
        <img className={styles.backArrow} src={backArrow.src} />
        <img className={styles.socialIcon} src={socialIcon.src} />
      </div>
      <BitcoinPriceDescription />
      <div className={styles.screenshot_2023_08_10At_7_19_1}>
        <p className={styles.bitcoinPrice}>51.00</p>
        <img
          className={styles.text51_00}
          src={screenshot_2023_08_10At_7_19_1.src}
        />
      </div>
      <div className={styles.orders}>
        <img className={styles.price} src={body.src} />
      </div>
      <Buttons />
      <div className={styles.overlay} />
      <LimitedTimeOrder />
    </div>
  );
};

const BitcoinPriceDescription = () => (
  <div className={styles.banner}>
    <img
      className={styles.screenshot_2023_08_10At_7_17_1}
      src={screenshot_2023_08_10At_7_17_1.src}
    />
    <p className={styles.bitcoinPriceDescription}>
      On December 1st, 2027, Bitcoin price will be &#x24;81,045.74 of more?
    </p>
  </div>
);

const Buttons = () => (
  <div className={styles.buttons}>
    <Button text="Yes" />
    <Button
      text="Buy No"
      override={{
        backgroundColor: "rgb(229, 92, 20)",
      }}
    />
  </div>
);

const LimitedTimeOrder = () => (
  <div className={styles.alert}>
    <p className={styles.limitedTimeOrder}>Limited Time Order!</p>
    <p className={styles.etherWillCloseToday}>Ether will close higher today?</p>
    <img className={styles.group_1} src={group_1.src} />
    <Button text="Yes" />
    <Button
      text="No"
      override={{
        backgroundColor: "rgb(229, 92, 20)",
      }}
    />
  </div>
);
