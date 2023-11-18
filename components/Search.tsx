import styles from "./Search.module.css";
import search from "./search.svg";
export const Search = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className={styles.searchComponent} src={search.src} style={override} />
  );
};
