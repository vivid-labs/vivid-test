import styles from "./Storylane.module.css";
import storylaneDocs from "./storylaneDocs.png";
import chatbotImage from "./chatbotImage.png";
export const Storylane = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.storylaneComponent} style={override}>
      <img className={styles.storylaneDocs} src={storylaneDocs.src} />
      <div className={styles.chatbotIcon}>
        <div className={styles.chatbotCircle} />
        <img className={styles.chatbotImage} src={chatbotImage.src} />
      </div>
      <div className={styles.chatbotPane}>
        <div className={styles.messages}>
          <div className={styles.message}>
            <p
              className={
                styles.hiimportantICanAnswerAnyOfYourQuestionsAboutStorylane
              }
            >
              Hi! I can answer any of your questions about Storylane.
            </p>
          </div>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.input}>
            <p className={styles.howDoIExportADemo}>
              How do I export a demo...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
