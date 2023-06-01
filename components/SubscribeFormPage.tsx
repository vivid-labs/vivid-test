import styles from "./SubscribeFormPage.module.css";
import { Button } from "./Button";
import { EnvelopeSimple } from "./EnvelopeSimple";

export const SubscribeFormPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.subscribeFormPage}>
      <p className={styles.enterYourEmailHere}>Enter your email here</p>
      <Button
        property_1="Secondary/Filled"
        hasLeftIcon={true}
        leftIcon={<EnvelopeSimple />}
        hasText={true}
        text="Subscribe"
        style={{
          height: "60px",
          width: "fit-content",
        }}
      />
    </div>
  );
};
