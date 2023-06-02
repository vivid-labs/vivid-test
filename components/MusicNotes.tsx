import styles from "./MusicNotes.module.css";
import musicNotes from "./musicNotes.svg";

export const MusicNotes = ({ style }: { style?: any }) => {
  return (
    <img src={musicNotes.src} style={style} className={styles.musicNotes} />
  );
};
