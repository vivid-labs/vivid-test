import styles from "./SubscribeWidgetMobile.module.css";
import { User } from "./User";
import { EyeSlash } from "./EyeSlash";
import { Button } from "./Button";
import { EnvelopeSimple } from "./EnvelopeSimple";

export const SubscribeWidgetMobile = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.subscribeWidgetMobile}>
      <div className={styles.typeForm}>
        <User
          style={{
            height: "20px",
            width: "20px",
          }}
        />
        <p className={styles.enterYourEmailAddress}>Enter Your Email Address</p>
        <EyeSlash
          style={{
            height: "20px",
            width: "20px",
          }}
        />
      </div>
      <Button
        property_1="Tertiary/Filled"
        hasLeftIcon={true}
        leftIcon={<EnvelopeSimple />}
        hasText={true}
        text="Subscribe"
        style={{
          height: "46px",
          width: "100%",
        }}
      />
    </div>
  );
};
