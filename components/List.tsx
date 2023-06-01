import styles from "./List.module.css";
import list from "./list.svg";

export const List = ({ style }: { style?: any }) => {
  return <img src={list.src} style={style} className={styles.list} />;
};
