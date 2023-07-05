import styles from "./Content.module.css";
import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { GitHubIcon } from "./GitHubIcon";
import { OutlinedLogo } from "./OutlinedLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const Content = ({ override }: { override?: any }) => {
  divProps = [
    {
      className: styles.left,
    },
    {
      className: styles.right,
    },
  ];
  return (
    <div style={override} className={styles.content}>
      <div className={styles.section}>
        {divProps.map((props, i) => (
          <div {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
