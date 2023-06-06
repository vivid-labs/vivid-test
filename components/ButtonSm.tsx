import styles from "./ButtonSm.module.css";
import icnSettingsIcnXsImage6 from "./icnSettingsIcnXsImage6.svg";
import arrowRightAlt2 from "./arrowRightAlt2.svg";
import icnCloseIcnXsImage2 from "./icnCloseIcnXsImage2.svg";
import icnSettingsIcnXsImage5 from "./icnSettingsIcnXsImage5.svg";
import icnArrowLeftIcnXsImage6 from "./icnArrowLeftIcnXsImage6.svg";
import icnArrowRightIcnXsImage6 from "./icnArrowRightIcnXsImage6.svg";
import icnSettingsIcnXsImage4 from "./icnSettingsIcnXsImage4.svg";
import dashiconsArrowRightAlt2Image1 from "./dashiconsArrowRightAlt2Image1.svg";
import icnCloseIcnXsImage1 from "./icnCloseIcnXsImage1.svg";
import icnSettingsIcnXsImage3 from "./icnSettingsIcnXsImage3.svg";
import icnArrowLeftIcnXsImage5 from "./icnArrowLeftIcnXsImage5.svg";
import icnArrowRightIcnXsImage5 from "./icnArrowRightIcnXsImage5.svg";
import icnSettingsIcnXsImage2 from "./icnSettingsIcnXsImage2.svg";
import dashiconsArrowRightAlt2Image from "./dashiconsArrowRightAlt2Image.svg";
import icnCloseIcnXsImage from "./icnCloseIcnXsImage.svg";
import icnSettingsIcnXsImage1 from "./icnSettingsIcnXsImage1.svg";
import icnArrowLeftIcnXsImage4 from "./icnArrowLeftIcnXsImage4.svg";
import icnArrowRightIcnXsImage4 from "./icnArrowRightIcnXsImage4.svg";
import icnSettingsIcnXsImage from "./icnSettingsIcnXsImage.svg";
import icnArrowLeftIcnXsImage3 from "./icnArrowLeftIcnXsImage3.svg";
import icnArrowLeftIcnXsImage2 from "./icnArrowLeftIcnXsImage2.svg";
import icnArrowLeftIcnXsImage1 from "./icnArrowLeftIcnXsImage1.svg";
import icnArrowLeftIcnXsImage from "./icnArrowLeftIcnXsImage.svg";
import dashiconsArrowRightAlt2 from "./dashiconsArrowRightAlt2.svg";
import icnCloseIcnXs from "./icnCloseIcnXs.svg";
import icnArrowRightIcnXsImage3 from "./icnArrowRightIcnXsImage3.svg";
import icnArrowRightIcnXsImage2 from "./icnArrowRightIcnXsImage2.svg";
import icnArrowRightIcnXsImage1 from "./icnArrowRightIcnXsImage1.svg";
import icnArrowRightIcnXsImage from "./icnArrowRightIcnXsImage.svg";
import icnSettingsIcnXs from "./icnSettingsIcnXs.svg";
import icnArrowLeftIcnXs from "./icnArrowLeftIcnXs.svg";
import icnArrowRightIcnXs from "./icnArrowRightIcnXs.svg";

export const ButtonSm = ({
  style,
  text,
  icon,
  rounded,
  ourlined,
  iconLeft,
  dropdown,
  previous,
  next,
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
}) => {
  if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent33}>
        <p className={styles.h6Text19}>Button</p>
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent32}>
        <img
          src={icnSettingsIcnXsImage6.src}
          className={styles.icnSettingsIcnXsImage6}
        />
        <p className={styles.h6Text18}>Button</p>
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent31}>
        <p className={styles.h6Text17}>Button</p>
        <img src={arrowRightAlt2.src} className={styles.arrowRightAlt2} />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent30}>
        <p className={styles.h6Text16}>Button</p>
        <img
          src={icnCloseIcnXsImage2.src}
          className={styles.icnCloseIcnXsImage2}
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent29}>
        <img
          src={icnSettingsIcnXsImage5.src}
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent28}>
        <img
          src={icnArrowLeftIcnXsImage6.src}
          className={styles.icnArrowLeftIcnXsImage6}
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
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent27}>
        <img
          src={icnArrowRightIcnXsImage6.src}
          className={styles.icnArrowRightIcnXsImage6}
        />
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent26}>
        <img
          src={icnSettingsIcnXsImage4.src}
          className={styles.icnSettingsIcnXsImage4}
        />
        <p className={styles.h6Text15}>Button</p>
      </div>
    );
  } else if (
    text === "false" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "true" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent25}>
        <p className={styles.h6Text14}>Button</p>
        <img
          src={dashiconsArrowRightAlt2Image1.src}
          className={styles.dashiconsArrowRightAlt2Image1}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent24}>
        <p className={styles.h6Text13}>Button</p>
        <img
          src={icnCloseIcnXsImage1.src}
          className={styles.icnCloseIcnXsImage1}
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent23}>
        <img
          src={icnSettingsIcnXsImage3.src}
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent22}>
        <img
          src={icnArrowLeftIcnXsImage5.src}
          className={styles.icnArrowLeftIcnXsImage5}
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
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent21}>
        <img
          src={icnArrowRightIcnXsImage5.src}
          className={styles.icnArrowRightIcnXsImage5}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent20}>
        <p className={styles.h6Text12}>Button</p>
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent19}>
        <img
          src={icnSettingsIcnXsImage2.src}
          className={styles.icnSettingsIcnXsImage2}
        />
        <p className={styles.h6Text11}>Button</p>
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent18}>
        <p className={styles.h6Text10}>Button</p>
        <img
          src={dashiconsArrowRightAlt2Image.src}
          className={styles.dashiconsArrowRightAlt2Image}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent17}>
        <p className={styles.tagText}>Button</p>
        <img
          src={icnCloseIcnXsImage.src}
          className={styles.icnCloseIcnXsImage}
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent16}>
        <img
          src={icnSettingsIcnXsImage1.src}
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent15}>
        <img
          src={icnArrowLeftIcnXsImage4.src}
          className={styles.icnArrowLeftIcnXsImage4}
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
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent14}>
        <img
          src={icnArrowRightIcnXsImage4.src}
          className={styles.icnArrowRightIcnXsImage4}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "false" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent13}>
        <p className={styles.h6Text9}>Button</p>
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent12}>
        <img
          src={icnSettingsIcnXsImage.src}
          className={styles.icnSettingsIcnXsImage}
        />
        <p className={styles.h6Text8}>Button</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent11}>
        <img
          src={icnArrowLeftIcnXsImage3.src}
          className={styles.icnArrowLeftIcnXsImage3}
        />
        <p className={styles.h6Text7}>Previous</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent10}>
        <img
          src={icnArrowLeftIcnXsImage2.src}
          className={styles.icnArrowLeftIcnXsImage2}
        />
        <p className={styles.h6Text6}>Previous</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent9}>
        <img
          src={icnArrowLeftIcnXsImage1.src}
          className={styles.icnArrowLeftIcnXsImage1}
        />
        <p className={styles.h6Text5}>Previous</p>
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "false" &&
    dropdown === "false" &&
    previous === "true" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent8}>
        <img
          src={icnArrowLeftIcnXsImage.src}
          className={styles.icnArrowLeftIcnXsImage}
        />
        <p className={styles.h6Text4}>Previous</p>
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent7}>
        <p className={styles.h6Text3}>Button</p>
        <img
          src={dashiconsArrowRightAlt2.src}
          className={styles.dashiconsArrowRightAlt2}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent6}>
        <p className={styles.h6Text2}>Button</p>
        <img src={icnCloseIcnXs.src} className={styles.icnCloseIcnXs} />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent5}>
        <p className={styles.h6Text1}>Next</p>
        <img
          src={icnArrowRightIcnXsImage3.src}
          className={styles.icnArrowRightIcnXsImage3}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "false" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent4}>
        <p className={styles.h6Text}>Next</p>
        <img
          src={icnArrowRightIcnXsImage2.src}
          className={styles.icnArrowRightIcnXsImage2}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "false" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent3}>
        <p className={styles.tag}>Next</p>
        <img
          src={icnArrowRightIcnXsImage1.src}
          className={styles.icnArrowRightIcnXsImage1}
        />
      </div>
    );
  } else if (
    text === "true" &&
    icon === "true" &&
    rounded === "true" &&
    ourlined === "true" &&
    iconLeft === "true" &&
    dropdown === "false" &&
    previous === "false" &&
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent2}>
        <p className={styles.h6}>Next</p>
        <img
          src={icnArrowRightIcnXsImage.src}
          className={styles.icnArrowRightIcnXsImage}
        />
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent1}>
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
    next === "false"
  ) {
    return (
      <div style={style} className={styles.buttonSmComponent}>
        <img src={icnArrowLeftIcnXs.src} className={styles.icnArrowLeftIcnXs} />
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
    next === "true"
  ) {
    return (
      <div style={style} className={styles.buttonSm}>
        <img
          src={icnArrowRightIcnXs.src}
          className={styles.icnArrowRightIcnXs}
        />
      </div>
    );
  } else {
    return null;
  }
};
