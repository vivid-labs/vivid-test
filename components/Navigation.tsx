import styles from "./Navigation.module.css";
import { Storefront } from "./Storefront";
import vivid_cc4e035adad2 from "./cc4e035adad2.svg";
import { List } from "./List";
import vivid_65a080893cb9 from "./65a080893cb9.svg";
import vivid_b63d0a0e96c0 from "./b63d0a0e96c0.svg";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { User } from "./User";

export const Navigation = ({
  style,
  property_1,
}: {
  style: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "Navigation/Mobile":
      return (
        <div style={style} className={styles.navigation0}>
          <div className={styles.navigation1}>
            <div className={styles.navigation2}>
              <div>
                <Storefront
                  style={{
                    height: "24px",
                    width: "24px",
                  }}
                />
                <img
                  src={vivid_cc4e035adad2.src}
                  className={styles.navigation3}
                />
              </div>
            </div>
          </div>
          <div className={styles.navigation4}>
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
        <div style={style} className={styles.navigation5}>
          <div className={styles.navigation6}>
            <div className={styles.navigation7}>
              <div>
                <Storefront
                  style={{
                    height: "24px",
                    width: "24px",
                  }}
                />
                <img
                  src={vivid_65a080893cb9.src}
                  className={styles.navigation8}
                />
              </div>
            </div>
          </div>
          <div className={styles.navigation9}>
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
        <div style={style} className={styles.navigation10}>
          <div className={styles.navigation11}>
            <div>
              <Storefront />
              <img
                src={vivid_b63d0a0e96c0.src}
                className={styles.navigation12}
              />
            </div>
          </div>
          <div className={styles.navigation13}>
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
