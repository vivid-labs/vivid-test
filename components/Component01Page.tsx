import styles from "./Component01Page.module.css";
import image01 from "./image01.png";

export const Component01Page = ({ style }: { style?: any }) => {
  return (
    <img style={style} src={image01.src} className={styles.component01Page} />
  );
};
