import styles from "./ButtonPage.module.css";
import { Button } from "./Button";

export const ButtonPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.buttonPage}>
      <Button size="Large" hover="True" />
    </div>
  );
};
