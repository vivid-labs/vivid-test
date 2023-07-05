import styles from "./SubscribeForm.module.css";
import { Button } from "./Button";
import { EnvelopeSimple } from "./EnvelopeSimple";
export const SubscribeForm = ({
  override,
  property_1,
  email,
}: {
  override?: any;
  property_1: string;
  email: string;
}) => {
  return (
    <div style={override} className={styles.subscribeForm}>
    <p className={styles.emailText}>{email}</p>
    <Button
      property_1="Secondary/Filled"
      hasLeftIcon={true}
      leftIcon={<EnvelopeSimple />}
      hasText={true}
      text="Subscribe"
      override={{
        height: "60px",
        width: "fit-content",
      }}
    />
   </div> 
  );
};
