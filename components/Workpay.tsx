import styles from "./Workpay.module.css";
import vectorImage31 from "./vectorImage31.svg";
import vectorImage30 from "./vectorImage30.svg";
import vectorImage29 from "./vectorImage29.svg";
import vectorImage28 from "./vectorImage28.svg";
import vectorImage27 from "./vectorImage27.svg";
import vectorImage26 from "./vectorImage26.svg";
import vectorImage25 from "./vectorImage25.svg";
import vectorImage24 from "./vectorImage24.svg";
import vectorImage23 from "./vectorImage23.svg";
import vectorImage22 from "./vectorImage22.svg";
import vectorImage21 from "./vectorImage21.svg";
import groupImage5 from "./groupImage5.svg";
import vectorImage20 from "./vectorImage20.svg";
import vectorImage19 from "./vectorImage19.svg";
import vectorImage18 from "./vectorImage18.svg";
import vectorImage17 from "./vectorImage17.svg";
import vectorImage16 from "./vectorImage16.svg";
import vectorImage15 from "./vectorImage15.svg";
import groupImage4 from "./groupImage4.svg";
import vectorImage14 from "./vectorImage14.svg";
import vectorImage13 from "./vectorImage13.svg";
import vectorImage12 from "./vectorImage12.svg";
import vectorImage11 from "./vectorImage11.svg";
import vectorImage10 from "./vectorImage10.svg";
import vectorImage9 from "./vectorImage9.svg";
import groupImage3 from "./groupImage3.svg";
import vectorImage8 from "./vectorImage8.svg";
import vectorImage7 from "./vectorImage7.svg";
import vectorImage6 from "./vectorImage6.svg";
import vectorImage5 from "./vectorImage5.svg";
import vectorImage4 from "./vectorImage4.svg";
import vectorImage3 from "./vectorImage3.svg";
import vectorImage2 from "./vectorImage2.svg";
import vectorImage1 from "./vectorImage1.svg";
import groupImage2 from "./groupImage2.svg";
import vectorImage from "./vectorImage.svg";
import groupImage1 from "./groupImage1.svg";
import vector from "./vector.svg";
import groupImage from "./groupImage.svg";
import group from "./group.svg";
import chatbotImage from "./chatbotImage.png";

export const Workpay = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.workpayComponent} style={override}>
      <VectorImages />
      <div className={styles.overlay} />
      <div className={styles.chatbotIcon}>
        <div className={styles.chatbotCircle} />
        <img className={styles.chatbotImage} src={chatbotImage.src} />
      </div>
      <WorkpayChatbot />
    </div>
  );
};

const VectorImages = () => (
  <div className={styles.background}>
    <img className={styles.vector} src={vectorImage31.src} />
    <img className={styles.vectorImage} src={vectorImage30.src} />
    <img className={styles.vectorImage1} src={vectorImage29.src} />
    <img className={styles.vectorImage2} src={vectorImage28.src} />
    <img className={styles.vectorImage3} src={vectorImage27.src} />
    <img className={styles.vectorImage4} src={vectorImage26.src} />
    <img className={styles.vectorImage5} src={vectorImage25.src} />
    <img className={styles.vectorImage6} src={vectorImage24.src} />
    <img className={styles.vectorImage7} src={vectorImage23.src} />
    <img className={styles.vectorImage8} src={vectorImage22.src} />
    <img className={styles.vectorImage9} src={vectorImage21.src} />
    <div>
      <img className={styles.group} src={groupImage5.src} />
    </div>
    <img className={styles.vectorImage10} src={vectorImage20.src} />
    <img className={styles.vectorImage11} src={vectorImage19.src} />
    <img className={styles.vectorImage12} src={vectorImage18.src} />
    <img className={styles.vectorImage13} src={vectorImage17.src} />
    <img className={styles.vectorImage14} src={vectorImage16.src} />
    <img className={styles.vectorImage15} src={vectorImage15.src} />
    <img className={styles.groupImage} src={groupImage4.src} />
    <img className={styles.vectorImage16} src={vectorImage14.src} />
    <img className={styles.vectorImage17} src={vectorImage13.src} />
    <img className={styles.vectorImage18} src={vectorImage12.src} />
    <img className={styles.vectorImage19} src={vectorImage11.src} />
    <img className={styles.vectorImage20} src={vectorImage10.src} />
    <img className={styles.vectorImage21} src={vectorImage9.src} />
    <div>
      <img className={styles.groupImage1} src={groupImage3.src} />
    </div>
    <img className={styles.vectorImage22} src={vectorImage8.src} />
    <img className={styles.vectorImage23} src={vectorImage7.src} />
    <img className={styles.vectorImage24} src={vectorImage6.src} />
    <img className={styles.vectorImage25} src={vectorImage5.src} />
    <img className={styles.vectorImage26} src={vectorImage4.src} />
    <img className={styles.vectorImage27} src={vectorImage3.src} />
    <img className={styles.vectorImage28} src={vectorImage2.src} />
    <img className={styles.vectorImage29} src={vectorImage1.src} />
    <img className={styles.groupImage2} src={groupImage2.src} />
    <img className={styles.vectorImage30} src={vectorImage.src} />
    <img className={styles.groupImage3} src={groupImage1.src} />
    <img className={styles.vectorImage31} src={vector.src} />
    <div>
      <img className={styles.groupImage4} src={groupImage.src} />
    </div>
    <div>
      <img className={styles.groupImage5} src={group.src} />
    </div>
  </div>
);

const WorkpayChatbot = () => (
  <div className={styles.chatbotPane}>
    <div className={styles.messages}>
      <div className={styles.message}>
        <p
          className={styles.hiimportantICanAnswerAnyOfYourQuestionsAboutWorkpay}
        >
          Hi! I can answer any of your questions about Workpay.
        </p>
      </div>
    </div>
    <div className={styles.inputSection}>
      <div className={styles.input}>
        <p className={styles.howDoIReviewExpenses}>
          How do I review expenses...
        </p>
      </div>
    </div>
  </div>
);
