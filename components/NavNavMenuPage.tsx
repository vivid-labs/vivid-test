import styles from "./NavNavMenuPage.module.css";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { User } from "./User";

export const NavNavMenuPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.navNavMenuPage}>
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
  );
};
