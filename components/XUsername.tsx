import styles from "./XUsername.module.css";
import vivid_6037f9649d84ea96e8a0f2a20423bb0ab73f6cfa from "./6037f9649d84ea96e8a0f2a20423bb0ab73f6cfa.png";
import { ArrowHeader } from "./ArrowHeader";

export const XUsername = () => {
  return (
    <div className={styles.xUsername0}>
      <p className={styles.xUsername1}>Elvis</p>
      <div className={styles.xUsername2}>
        <img
          src={vivid_6037f9649d84ea96e8a0f2a20423bb0ab73f6cfa.src}
          className={styles.xUsername3}
        />
        <ArrowHeader />
      </div>
    </div>
  );
};
