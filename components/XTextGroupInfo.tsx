import styles from "./XTextGroupInfo.module.css";
import { Text_24 } from "./Text_24";

export const XTextGroupInfo = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xTextGroupInfo0}>
      <Text_24 />
      <p className={styles.xTextGroupInfo1}>Tips, Tricks & Tutorials</p>
    </div>
  );
};
