import styles from "./Navigation.module.css";
import { Storefront } from "./Storefront";
import nftMarketplace_2 from "./nftMarketplace_2.svg";
import { List } from "./List";
import nftMarketplace_1 from "./nftMarketplace_1.svg";
import nftMarketplace from "./nftMarketplace.svg";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { User } from "./User";

export const Navigation = ({
  style,
  property_1,
}: {
  style?: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "Navigation/Mobile":
      return (
        <div style={style} className={styles.navigation}>
          <div className={styles.navLogo}>
            <div className={styles.navLogoDiv}>
              <div>
                <Storefront
                  style={{
                    height: "24px",
                    width: "24px",
                  }}
                />
                <img
                  src={nftMarketplace_2.src}
                  className={styles.nftMarketplace}
                />
              </div>
            </div>
          </div>
          <div className={styles.navNavMenu}>
            <List
              style={{
                height: "24px",
                width: "24px",
              }}
            />
          </div>
        </div>
      );
    case "Navigation/Tablet":
      return (
        <div style={style} className={styles.navigationComponent}>
          <div className={styles.navLogoDiv1}>
            <div className={styles.navLogoDiv2}>
              <div>
                <Storefront
                  style={{
                    height: "24px",
                    width: "24px",
                  }}
                />
                <img
                  src={nftMarketplace_1.src}
                  className={styles.nftMarketplaceImage}
                />
              </div>
            </div>
          </div>
          <div className={styles.navNavMenuDiv}>
            <List
              style={{
                height: "24px",
                width: "24px",
              }}
            />
          </div>
        </div>
      );
    case "Navigation/Desktop":
      return (
        <div style={style} className={styles.navigationComponent1}>
          <div className={styles.navLogoDiv3}>
            <div>
              <Storefront />
              <img
                src={nftMarketplace.src}
                className={styles.nftMarketplaceImage1}
              />
            </div>
          </div>
          <div className={styles.navNavMenuDiv1}>
            <Button
              property_1="Tertiary/Filled"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch />}
              hasText={true}
              text="Marketplace"
              style={{}}
            />
            <Button
              property_1="Tertiary/Filled"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch />}
              hasText={true}
              text="Rankings"
              style={{}}
            />
            <Button
              property_1="Tertiary/Filled"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch />}
              hasText={true}
              text="Connect a wallet"
              style={{}}
            />
            <Button
              property_1="Secondary/Filled"
              hasLeftIcon={true}
              leftIcon={<User />}
              hasText={true}
              text="Sign Up"
              style={{}}
            />
          </div>
        </div>
      );
  }
};
