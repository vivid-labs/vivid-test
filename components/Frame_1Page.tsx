import styles from "./Frame_1Page.module.css";
import vivid_dcde11904924 from "./dcde11904924.svg";
import vivid_910875890fee from "./910875890fee.svg";
import vivid_e602a929ba50 from "./e602a929ba50.svg";
import vivid_244e525cdaf8 from "./244e525cdaf8.svg";
import vivid_0863a46036af from "./0863a46036af.svg";

export const Frame_1Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.frame_1Page0}>
      <p className={styles.frame_1Page1}>Bam</p>
      <div className={styles.frame_1Page2}>
        <div>
          <img src={vivid_dcde11904924.src} className={styles.frame_1Page3} />
          <div>
            <div>
              <img
                src={vivid_910875890fee.src}
                className={styles.frame_1Page4}
              />
            </div>
            <img src={vivid_e602a929ba50.src} className={styles.frame_1Page5} />
            <img src={vivid_244e525cdaf8.src} className={styles.frame_1Page6} />
          </div>
        </div>
      </div>
      <div className={styles.frame_1Page7}>
        <div>
          <img src={vivid_0863a46036af.src} className={styles.frame_1Page8} />
        </div>
      </div>
    </div>
  );
};
