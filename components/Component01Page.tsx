import styles from "./Component01Page.module.css";
import 01 from "./01.png";


export const Component01Page = ({
  style
}: {
  style?: any;
}) => {
  

  return <img style={style} src={01.src} className={styles.component01Page} />;
};