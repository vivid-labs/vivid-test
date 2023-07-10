import styles from "./Frame_269.module.css";
export const Frame_269 = ({
  override,
  showText,
  text,
}: {
  override?: any;
  showText: boolean;
  text: string;
}) => {
  return (
    <div style={override} className={styles.frame_269}>
      {showText ? <p className={styles.frame_269Div}>{text}</p> : null}
    </div>
  );
};
