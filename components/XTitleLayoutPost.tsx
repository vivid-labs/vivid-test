import styles from "./XTitleLayoutPost.module.css";
import { XAvatarCircle } from "./XAvatarCircle";
import { ArrowDown_24 } from "./ArrowDown_24";

export const XTitleLayoutPost = () => {
  return (
    <div className={styles.xTitleLayoutPost0}>
      <XAvatarCircle />
      <div className={styles.xTitleLayoutPost1}>
        <p className={styles.xTitleLayoutPost2}>Figma community</p>
        <p className={styles.xTitleLayoutPost3}>10 авг в 14:00</p>
      </div>
      <ArrowDown_24 />
    </div>
  );
};
