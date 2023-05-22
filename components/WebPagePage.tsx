import styles from "./WebPagePage.module.css";
import { NavBar } from "./NavBar";
import { CardSection } from "./CardSection";
import { Card } from "./Card";

export const WebPagePage = () => {
  return (
    <div className={styles.webPagePage0}>
      <NavBar screenSize="Desktop" />
      <CardSection screenSize="Desktop" item_2={<Card />} />
    </div>
  );
};
