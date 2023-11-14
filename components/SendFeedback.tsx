import styles from "./SendFeedback.module.css";
import sendFeedback from "./sendFeedback.svg";
export const SendFeedback = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
     className={styles.sendFeedbackImage}
     src={sendFeedback.src}
     style={override}
   /> 
  );
};
