import styles from "./CreateAccountSection.module.css";
import imagePlaceholder from "./imagePlaceholder.png";
import { TypeForm } from "./TypeForm";
import { User } from "./User";
import { EyeSlash } from "./EyeSlash";
import { EnvelopeSimple } from "./EnvelopeSimple";
import { LockKey } from "./LockKey";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";

export const CreateAccountSection = ({
  style,
  screen,
}: {
  style?: any;
  screen: string;
}) => {
  const imagePlaceholderScreen = {
    Desktop: {
      height: "100%",
      flex: "1 1 0%",
      minWidth: 0,
    },
    Tablet: {
      height: "100%",
      flex: "1 1 0%",
      minWidth: 0,
    },
    Mobile: {
      width: "100%",
      height: "232px",
    },
  }[screen];
  const createAccountScreen = {
    Desktop: {
      fontSize: "51px",
      lineHeight: "1.100000023841858em",
    },
    Tablet: {
      fontSize: "38px",
      lineHeight: "1.2000000476837158em",
    },
    Mobile: {
      fontSize: "38px",
      lineHeight: "1.2000000476837158em",
    },
  }[screen];
  const welcomeimportantEnterYourDetailsAndStartCreatingCollectingAndSellingNfTsScreen =
    {
      Desktop: {
        fontSize: "22px",
        lineHeight: "1.600000023841858em",
      },
      Tablet: {
        fontSize: "16px",
        lineHeight: "1.399999976158142em",
      },
      Mobile: {
        fontSize: "16px",
        lineHeight: "1.399999976158142em",
      },
    }[screen];
  const headlineSubheadScreen = {
    Desktop: {
      width: "460px",
    },
    Tablet: {
      width: "325px",
    },
    Mobile: {
      width: "100%",
    },
  }[screen];
  const formScreen = {
    Desktop: {
      width: "330px",
    },
    Tablet: {
      width: "325px",
    },
    Mobile: {
      width: "100%",
    },
  }[screen];
  const createAccountFormScreen = {
    Desktop: {
      alignItems: "start",
      gap: "40px",
      paddingTop: "80px",
      paddingBottom: "80px",
      flex: "1 1 0%",
      minWidth: 0,
    },
    Tablet: {
      alignItems: "start",
      gap: "40px",
      paddingTop: "80px",
      paddingBottom: "80px",
      flex: "1 1 0%",
      minWidth: 0,
    },
    Mobile: {
      alignItems: "center",
      gap: "30px",
      paddingTop: "30px",
      paddingBottom: "40px",
      width: "315px",
    },
  }[screen];
  const createAccountSectionScreen = {
    Desktop: {
      flexDirection: "row",
      justifyContent: "start",
      gap: "60px",
      width: "1280px",
    },
    Tablet: {
      flexDirection: "row",
      justifyContent: "start",
      gap: "40px",
      width: "834px",
    },
    Mobile: {
      flexDirection: "column",
      justifyContent: "center",
      width: "375px",
    },
  }[screen];

  return (
    <div
      style={{
        ...createAccountSectionScreen,
        ...style,
      }}
      className={styles.createAccountSection}
    >
      <img
        style={imagePlaceholderScreen}
        src={imagePlaceholder.src}
        className={styles.imagePlaceholder}
      />
      <div style={createAccountFormScreen} className={styles.createAccountForm}>
        <div style={headlineSubheadScreen} className={styles.headlineSubhead}>
          <div className={styles.headlineAndSubhead}>
            <div className={styles.headline}>
              <p style={createAccountScreen} className={styles.createAccount}>
                Create account
              </p>
            </div>
            <div className={styles.subhead}>
              <p
                style={
                  welcomeimportantEnterYourDetailsAndStartCreatingCollectingAndSellingNfTsScreen
                }
                className={
                  styles.welcomeimportantEnterYourDetailsAndStartCreatingCollectingAndSellingNfTs
                }
              >
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </p>
            </div>
          </div>
        </div>
        <div style={formScreen} className={styles.form}>
          <div className={styles.typeforms}>
            <TypeForm
              showLeftIcon={true}
              leftIcon={<User />}
              content="Username"
              showRightIcon={true}
              rightIcon={<EyeSlash />}
              style={{
                height: "46px",
                width: "100%",
              }}
            />
            <TypeForm
              showLeftIcon={true}
              leftIcon={<EnvelopeSimple />}
              content="Email Address"
              showRightIcon={true}
              rightIcon={<EyeSlash />}
              style={{
                height: "46px",
                width: "100%",
              }}
            />
            <TypeForm
              showLeftIcon={true}
              leftIcon={<LockKey />}
              content="Password"
              showRightIcon={true}
              rightIcon={<EyeSlash />}
              style={{
                height: "46px",
                width: "100%",
              }}
            />
            <TypeForm
              showLeftIcon={true}
              leftIcon={<LockKey />}
              content="Confirm Password"
              showRightIcon={true}
              rightIcon={<EyeSlash />}
              style={{
                height: "46px",
                width: "100%",
              }}
            />
          </div>
          <Button
            property_1="Tertiary/Filled"
            hasLeftIcon={true}
            leftIcon={<RocketLaunch />}
            hasText={true}
            text="Create account"
            style={{
              height: "46px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
