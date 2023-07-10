import styles from "./Icon.module.css";
import nameRocket from "./nameRocket.svg";
import namePhone from "./namePhone.svg";
import nameEye from "./nameEye.svg";
import nameBookmark from "./nameBookmark.svg";
import nameArrowRight from "./nameArrowRight.svg";
import nameEnvelope from "./nameEnvelope.svg";
export const Icon = ({ override, name }: { override?: any; name: string }) => {
  let iconSrc;
  if (name === "Rocket") {
    iconSrc = nameRocket;
  } else if (name === "Phone") {
    iconSrc = namePhone;
  } else if (name === "Eye") {
    iconSrc = nameEye;
  } else if (name === "Bookmark") {
    iconSrc = nameBookmark;
  } else if (name === "ArrowRight") {
    iconSrc = nameArrowRight;
  } else {
    iconSrc = nameEnvelope;
  }
  return <img src={iconSrc.src} style={override} className={styles.icon} />;
};
