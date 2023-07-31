import styles from "./Button.module.css";
import { IconMail } from "./IconMail";
import { IconPlus } from "./IconPlus";
import mail from "./mail.svg";
export const Button = ({
  override,
  type,
  state,
}: {
  override?: any;
  type: string;
  state: string;
}) => {
  if (type === "default" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent17}>
        <p className={styles.continueText}>Continue</p>
      </div>
    );
  } else if (type === "primary button" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent16}>
        <p className={styles.continue}>Continue</p>
      </div>
    );
  } else if (type === "destructive" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent15}>
        <p className={styles.destructiveText}>Destructive</p>
      </div>
    );
  } else if (type === "destructive" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent14}>
        <p className={styles.destructive}>Destructive</p>
      </div>
    );
  } else if (type === "outline" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent13}>
        <p className={styles.cancelText}>Cancel</p>
      </div>
    );
  } else if (type === "outline" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent12}>
        <p className={styles.cancel}>Cancel</p>
      </div>
    );
  } else if (type === "subtle" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent11}>
        <p className={styles.subtleText}>Subtle</p>
      </div>
    );
  } else if (type === "subtle" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent10}>
        <p className={styles.subtle}>Subtle</p>
      </div>
    );
  } else if (type === "ghost" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent9}>
        <p className={styles.ghostText}>Ghost</p>
      </div>
    );
  } else if (type === "ghost" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent8}>
        <p className={styles.ghost}>Ghost</p>
      </div>
    );
  } else if (type === "link" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent7}>
        <p className={styles.linkText}>Link</p>
      </div>
    );
  } else if (type === "link" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent6}>
        <p className={styles.link}>Link</p>
      </div>
    );
  } else if (type === "with icon" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent5}>
        <IconMail
          override={{
            position: "relative",
          }}
        />
        <p className={styles.loginWithEmailText}>Login with Email</p>
      </div>
    );
  } else if (type === "just icon" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent4}>
        <IconPlus
          override={{
            position: "relative",
          }}
        />
      </div>
    );
  } else if (type === "just icon" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent3}>
        <IconPlus
          override={{
            position: "relative",
          }}
        />
      </div>
    );
  } else if (type === "just icon circle" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent2}>
        <IconPlus
          override={{
            position: "relative",
          }}
        />
      </div>
    );
  } else if (type === "just icon circle" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent1}>
        <IconPlus
          override={{
            position: "relative",
          }}
        />
      </div>
    );
  } else if (type === "with icon" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent}>
        <img src={mail.src} className={styles.mail} />
        <p className={styles.loginWithEmail}>Login with Email</p>
      </div>
    );
  } else if (type === "loading" && state === "Default") {
    return (
      <div style={override} className={styles.button}>
        <div>
          <div className={styles.loading} />
        </div>
        <p className={styles.loadingText}>Loading</p>
      </div>
    );
  } else {
    return null;
  }
};
