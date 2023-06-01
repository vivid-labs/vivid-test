import styles from "./NoComponentSet.module.css";
import { Button } from "./Button";
import { EnvelopeSimple } from "./EnvelopeSimple";

export const NoComponentSet = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.noComponentSet}>
      <p className={styles.enterYourEmailHere}>Enter your email here</p>
      <Button
        property_1="Secondary/Filled"
        hasLeftIcon={true}
        leftIcon={<EnvelopeSimple />}
        hasText={true}
        text="Subscribe"
        style={{
          width: "fit-content",
          height: "60px",
        }}
      />
    </div>
  );
};
