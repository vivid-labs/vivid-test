import styles from "./Storylane.module.css";
import storylaneDocs from "./storylaneDocs.png";
import chatbotImage from "./chatbotImage.png";
export const Storylane = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.howToExportDemo} style={override}>
    <img className={styles.storylaneComponent} src={storylaneDocs.src} />
    <div className={styles.chatbotCircle}>
      <div className={styles.storylaneDocs} />
      <img className={styles.chatbotIcon} src={chatbotImage.src} />
    </div>
    <div className={styles.input}>
      <div className={styles.messages}>
        <div className={styles.chatbotPane}>
          <p
            className={
              styles.chatbotImage
            }
          >
            Hi! I can answer any of your questions about Storylane.
          </p>
        </div>
      </div>
      <div className={styles.inputSection}>
        <div className={styles.hiCanAnswerQuestionsAboutStorylane}>
          <p className={styles.message}>
            How do I export a demo...
          </p>
        </div>
      </div>
    </div>
   </div> 
  );
};
