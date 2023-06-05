import styles from "./ButtonLg.module.css";
import icnSettingsIcnXsImage from "./icnSettingsIcnXsImage.svg";
import icnArrowDownIcnSmImage2 from "./icnArrowDownIcnSmImage2.svg";
import icnArrowLeftIcnSmImage2 from "./icnArrowLeftIcnSmImage2.svg";
import icnArrowRightIcnSmImage1 from "./icnArrowRightIcnSmImage1.svg";
import icnArrowDownIcnSmImage1 from "./icnArrowDownIcnSmImage1.svg";
import icnArrowLeftIcnSmImage1 from "./icnArrowLeftIcnSmImage1.svg";
import icnArrowRightIcnSmImage from "./icnArrowRightIcnSmImage.svg";
import icnSettingsIcnXs from "./icnSettingsIcnXs.svg";
import icnArrowDownIcnSmImage from "./icnArrowDownIcnSmImage.svg";
import icnArrowLeftIcnSmImage from "./icnArrowLeftIcnSmImage.svg";
import icnArrowRightIcnSm from "./icnArrowRightIcnSm.svg";
import icnArrowDownIcnSm from "./icnArrowDownIcnSm.svg";
import icnArrowLeftIcnSm from "./icnArrowLeftIcnSm.svg";
import icnPlayIcnSmImage2 from "./icnPlayIcnSmImage2.svg";
import icnPlayIcnSmImage1 from "./icnPlayIcnSmImage1.svg";
import icnPlayIcnSmImage from "./icnPlayIcnSmImage.svg";
import icnPlayIcnSm from "./icnPlayIcnSm.svg";

export const ButtonLg = ({
  style,
  text,
  icon,
  rounded,
  ourlined,
  iconLeft,
  dropdown,
  previous,
  next,
  play,
}: {
  style?: any;
  text: string;
  icon: string;
  rounded: string;
  ourlined: string;
  iconLeft: string;
  dropdown: string;
  previous: string;
  next: string;
  play: string;
}) => {
  if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent26}>
        <p className={styles.h3Text10}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent25}>
        <img
          src={icnSettingsIcnXsImage.src}
          className={styles.icnSettingsIcnXsImage6}
        />
        <p className={styles.h3Text9}>Button</p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent24}>
        <p className={styles.h3Text8}>Button</p>
        <img
          src={icnArrowDownIcnSmImage2.src}
          className={styles.icnArrowDownIcnSmImage2}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent23}>
        <img
          src={icnSettingsIcnXsImage.src}
          className={styles.icnSettingsIcnXsImage5}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent22}>
        <img
          src={icnArrowLeftIcnSmImage2.src}
          className={styles.icnArrowLeftIcnSmImage2}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent21}>
        <img
          src={icnArrowRightIcnSmImage1.src}
          className={styles.icnArrowRightIcnSmImage2}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent20}>
        <p className={styles.h3Text7}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent19}>
        <img
          src={icnSettingsIcnXsImage.src}
          className={styles.icnSettingsIcnXsImage4}
        />
        <p className={styles.h3Text6}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent18}>
        <p className={styles.h3Text5}>Button</p>
        <img
          src={icnArrowDownIcnSmImage1.src}
          className={styles.icnArrowDownIcnSmImage1}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent17}>
        <img
          src={icnSettingsIcnXsImage.src}
          className={styles.icnSettingsIcnXsImage3}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent16}>
        <img
          src={icnArrowLeftIcnSmImage1.src}
          className={styles.icnArrowLeftIcnSmImage1}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent15}>
        <img
          src={icnArrowRightIcnSmImage.src}
          className={styles.icnArrowRightIcnSmImage1}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent14}>
        <p className={styles.h3Text4}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent13}>
        <img
          src={icnSettingsIcnXs.src}
          className={styles.icnSettingsIcnXsImage2}
        />
        <p className={styles.h3Text3}>Button</p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent12}>
        <p className={styles.h3Text2}>Button</p>
        <img
          src={icnArrowDownIcnSmImage.src}
          className={styles.icnArrowDownIcnSmImage}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent11}>
        <img
          src={icnSettingsIcnXs.src}
          className={styles.icnSettingsIcnXsImage1}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent10}>
        <img
          src={icnArrowLeftIcnSmImage.src}
          className={styles.icnArrowLeftIcnSmImage}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent9}>
        <img
          src={icnArrowRightIcnSm.src}
          className={styles.icnArrowRightIcnSmImage}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent8}>
        <p className={styles.h3Text1}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent7}>
        <img
          src={icnSettingsIcnXs.src}
          className={styles.icnSettingsIcnXsImage}
        />
        <p className={styles.h3Text}>Button</p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent6}>
        <p className={styles.h3}>Button</p>
        <img src={icnArrowDownIcnSm.src} className={styles.icnArrowDownIcnSm} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent5}>
        <img src={icnSettingsIcnXs.src} className={styles.icnSettingsIcnXs} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent4}>
        <img src={icnArrowLeftIcnSm.src} className={styles.icnArrowLeftIcnSm} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true" &&
    play === "false"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent3}>
        <img
          src={icnArrowRightIcnSm.src}
          className={styles.icnArrowRightIcnSm}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent2}>
        <img
          src={icnPlayIcnSmImage2.src}
          className={styles.icnPlayIcnSmImage2}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent1}>
        <img
          src={icnPlayIcnSmImage1.src}
          className={styles.icnPlayIcnSmImage1}
        />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLgComponent}>
        <img src={icnPlayIcnSmImage.src} className={styles.icnPlayIcnSmImage} />
      </div>
    );
  } else if (
    text === "false" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false" &&
    play === "true"
  ) {
    return (
      <div style={style} className={styles.buttonLg}>
        <img src={icnPlayIcnSm.src} className={styles.icnPlayIcnSm} />
      </div>
    );
  } else {
    return null;
  }
};
