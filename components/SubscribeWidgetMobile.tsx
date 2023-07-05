import styles from "./SubscribeWidgetMobile.module.css";
import { User } from "./User";
import { EyeSlash } from "./EyeSlash";
import { Button } from "./Button";
import { EnvelopeSimple } from "./EnvelopeSimple";
export const SubscribeWidgetMobile = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.subscribeWidgetMobile}>
    <div className={styles.typeForm}>
      <User
        override={{
          height: "20px",
          width: "20px",
        }}
      />
      <p className={styles.enterEmailAddress}>Enter Your Email Address</p>
      <EyeSlash
        override={{
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
      override={{
        height: "46px",
        width: "100%",
      }}
    />
   </div> 
  );
};
