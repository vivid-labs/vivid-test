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
      <div style={override} className={styles.buttonComponent17Class}>
      <p className={styles.continueTextClass}>Continue</p>
     </div> 
    );
  } else if (type === "primary button" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent16Class}>
      <p className={styles.continueClass}>Continue</p>
     </div> 
    );
  } else if (type === "destructive" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent15Class}>
      <p className={styles.destructiveTextClass}>Destructive</p>
     </div> 
    );
  } else if (type === "destructive" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent14Class}>
      <p className={styles.destructiveClass}>Destructive</p>
     </div> 
    );
  } else if (type === "outline" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent13Class}>
      <p className={styles.cancelTextClass}>Cancel</p>
     </div> 
    );
  } else if (type === "outline" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent12Class}>
      <p className={styles.cancelClass}>Cancel</p>
     </div> 
    );
  } else if (type === "subtle" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent11Class}>
      <p className={styles.subtleTextClass}>Subtle</p>
     </div> 
    );
  } else if (type === "subtle" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent10Class}>
      <p className={styles.subtleClass}>Subtle</p>
     </div> 
    );
  } else if (type === "ghost" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent9Class}>
      <p className={styles.ghostTextClass}>Ghost</p>
     </div> 
    );
  } else if (type === "ghost" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent8Class}>
      <p className={styles.ghostClass}>Ghost</p>
     </div> 
    );
  } else if (type === "link" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent7Class}>
      <p className={styles.linkTextClass}>Link</p>
     </div> 
    );
  } else if (type === "link" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent6Class}>
      <p className={styles.linkClass}>Link</p>
     </div> 
    );
  } else if (type === "with icon" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent5Class}>
      <IconMail
        override={{
          position: "relative",
        }}
      />
      <p className={styles.loginWithEmailTextClass}>Login with Email</p>
     </div> 
    );
  } else if (type === "just icon" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent4Class}>
      <IconPlus
        override={{
          position: "relative",
        }}
      />
     </div> 
    );
  } else if (type === "just icon" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent3Class}>
      <IconPlus
        override={{
          position: "relative",
        }}
      />
     </div> 
    );
  } else if (type === "just icon circle" && state === "Default") {
    return (
      <div style={override} className={styles.buttonComponent2Class}>
      <IconPlus
        override={{
          position: "relative",
        }}
      />
     </div> 
    );
  } else if (type === "just icon circle" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponent1Class}>
      <IconPlus
        override={{
          position: "relative",
        }}
      />
     </div> 
    );
  } else if (type === "with icon" && state === "hover") {
    return (
      <div style={override} className={styles.buttonComponentClass}>
      <img src={mail.src} className={styles.mailClass} />
      <p className={styles.loginWithEmailClass}>Login with Email</p>
     </div> 
    );
  } else if (type === "loading" && state === "Default") {
    return (
      <div style={override} className={styles.buttonClass}>
      <div>
        <div className={styles.loadingClass} />
      </div>
      <p className={styles.loadingTextClass}>Loading</p>
     </div> 
    );
  } else {
    return null;
  }
};
