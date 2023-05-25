import styles from "./Property_1NavigationDesktopPage.module.css";
import { Storefront } from "./Storefront";
import vivid_b63d0a0e96c0 from "./b63d0a0e96c0.svg";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { User } from "./User";

export const Property_1NavigationDesktopPage = () => {
  return (
    <div className={styles.property_1NavigationDesktopPage0}>
      <div className={styles.property_1NavigationDesktopPage1}>
        <div className={styles.property_1NavigationDesktopPage2}>
          <Storefront />
          <img
            src={vivid_b63d0a0e96c0.src}
            className={styles.property_1NavigationDesktopPage3}
          />
        </div>
      </div>
      <div className={styles.property_1NavigationDesktopPage4}>
        <Button
          property_1="Tertiary/Filled"
          hasLeftIcon={true}
          leftIcon={<RocketLaunch />}
          hasText={true}
          text="Marketplace"
        />
        <Button
          property_1="Tertiary/Filled"
          hasLeftIcon={true}
          leftIcon={<RocketLaunch />}
          hasText={true}
          text="Rankings"
        />
        <Button
          property_1="Tertiary/Filled"
          hasLeftIcon={true}
          leftIcon={<RocketLaunch />}
          hasText={true}
          text="Connect a wallet"
        />
        <Button
          property_1="Secondary/Filled"
          hasLeftIcon={true}
          leftIcon={<User />}
          hasText={true}
          text="Sign Up"
        />
      </div>
    </div>
  );
};
