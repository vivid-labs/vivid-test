import styles from "./UlGlobalnavListPage.module.css";
import frameImage11 from "./frameImage11.svg";
import frameImage10 from "./frameImage10.svg";
import frameImage9 from "./frameImage9.svg";
import frameImage8 from "./frameImage8.svg";
import frameImage7 from "./frameImage7.svg";
import frameImage6 from "./frameImage6.svg";
import frameImage5 from "./frameImage5.svg";
import frameImage4 from "./frameImage4.svg";
import frameImage3 from "./frameImage3.svg";
import frameImage2 from "./frameImage2.svg";
import frameImage1 from "./frameImage1.svg";
import frameImage from "./frameImage.svg";
import frame from "./frame.svg";

export const UlGlobalnavListPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.ulGlobalnavListPage}>
      <div className={styles.apple}>
        <div className={styles.svg}>
          <img src={frameImage11.src} className={styles.frame} />
        </div>
        <div className={styles.span}>
          <p className={styles.appleText}>Apple</p>
        </div>
      </div>
      <div className={styles.div}>
        <div className={styles.store}>
          <div className={styles.svgDiv}>
            <img src={frameImage10.src} className={styles.frameImage} />
          </div>
          <div className={styles.spanDiv}>
            <p className={styles.storeText}>Store</p>
          </div>
        </div>
        <div className={styles.mac}>
          <div className={styles.svgDiv1}>
            <img src={frameImage9.src} className={styles.frameImage1} />
          </div>
          <div className={styles.spanDiv1}>
            <p className={styles.macText}>Mac</p>
          </div>
        </div>
        <div className={styles.iPad}>
          <div className={styles.svgDiv2}>
            <img src={frameImage8.src} className={styles.frameImage2} />
          </div>
          <div className={styles.spanDiv2}>
            <p className={styles.iPadText}>iPad</p>
          </div>
        </div>
        <div className={styles.iPhone}>
          <div className={styles.svgDiv3}>
            <img src={frameImage7.src} className={styles.frameImage3} />
          </div>
          <div className={styles.spanDiv3}>
            <p className={styles.iPhoneText}>iPhone</p>
          </div>
        </div>
        <div className={styles.watch}>
          <div className={styles.svgDiv4}>
            <img src={frameImage6.src} className={styles.frameImage4} />
          </div>
          <div className={styles.spanDiv4}>
            <p className={styles.watchText}>Watch</p>
          </div>
        </div>
        <div className={styles.airPods}>
          <div className={styles.svgDiv5}>
            <img src={frameImage5.src} className={styles.frameImage5} />
          </div>
          <div className={styles.spanDiv5}>
            <p className={styles.airPodsText}>AirPods</p>
          </div>
        </div>
        <div className={styles.tvAndHome}>
          <div className={styles.svgDiv6}>
            <img src={frameImage4.src} className={styles.frameImage6} />
          </div>
          <div className={styles.spanDiv6}>
            <p className={styles.tvAndHomeText}>TV &amp; Home</p>
          </div>
        </div>
        <div className={styles.entertainment}>
          <div className={styles.svgDiv7}>
            <img src={frameImage3.src} className={styles.frameImage7} />
          </div>
          <div className={styles.spanDiv7}>
            <p className={styles.entertainmentText}>Entertainment</p>
          </div>
        </div>
        <div className={styles.accessories}>
          <div className={styles.svgDiv8}>
            <img src={frameImage2.src} className={styles.frameImage8} />
          </div>
          <div className={styles.spanDiv8}>
            <p className={styles.accessoriesText}>Accessories</p>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.svgDiv9}>
            <img src={frameImage1.src} className={styles.frameImage9} />
          </div>
          <div className={styles.spanDiv9}>
            <p className={styles.supportText}>Support</p>
          </div>
        </div>
      </div>
      <div className={styles.svgDiv10}>
        <img src={frameImage.src} className={styles.frameImage10} />
      </div>
      <div className={styles.svgDiv11}>
        <img src={frame.src} className={styles.frameImage11} />
      </div>
    </div>
  );
};
