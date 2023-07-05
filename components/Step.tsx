import styles from "./Step.module.css";
import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
import { CheckMark } from "./CheckMark";
export const Step = ({
  override,
  status,
  icon,
  task,
  time,
}: {
  override?: any;
  status: string;
  icon: any;
  task: string;
  time: string;
}) => {
  divProps = [
    {
      className: styles.frame_8,
    },
    {
      className: styles.frame_7,
    },
  ];
  imgProps = [
    {
      src: img_2585_1.src,
      className: styles.img_2585_1,
    },
  ];
  checkMarkProps = [
    {
      override: {
        height: "56px",
        width: "56px",
      },
    },
  ];
  divProps = [
    {
      className: styles.frame_7Div,
    },
  ];
  divProps = [
    {
      className: styles.frame_8Div,
    },
    {
      className: styles.frame_7Div1,
    },
  ];
  divProps = [
    {
      className: styles.frame_8Div1,
    },
    {
      className: styles.frame_7Div2,
    },
  ];
  switch (status) {
    case "Todo":
      return (
        <div style={override} className={styles.step}>
          {divProps.map((props, i) => (
            <div {...props} key={i} />
          ))}
          {imgProps.map((props, i) => (
            <img {...props} key={i} />
          ))}
        </div>
      );
    case "Complete":
      return (
        <div style={override} className={styles.stepComponent}>
          {checkMarkProps.map((props, i) => (
            <CheckMark {...props} key={i} />
          ))}
          {divProps.map((props, i) => (
            <div {...props} key={i} />
          ))}
        </div>
      );
    case "Unsupported":
      return (
        <div style={override} className={styles.stepComponent1}>
          {divProps.map((props, i) => (
            <div {...props} key={i} />
          ))}
        </div>
      );
    case "Up Next":
      return (
        <div style={override} className={styles.stepComponent2}>
          {divProps.map((props, i) => (
            <div {...props} key={i} />
          ))}
        </div>
      );
    default:
      return null;
  }
};
