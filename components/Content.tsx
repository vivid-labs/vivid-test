import styles from "./Content.module.css";
import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { GitHubIcon } from "./GitHubIcon";
import { OutlinedLogo } from "./OutlinedLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const Content = ({ override }: { override?: any }) => {
  divProps = [
    {
      className: styles.leftContainer,
    },
    {
      className: styles.rightContainer,
    },
  ];
  return (
    <div style={override} className={styles.container}>
    <div className={styles.sectionContainer}>
      {divProps.map((props, i) => (
        <div {...props} key={i} />
      ))}
    </div>
   </div> 
  );
};
