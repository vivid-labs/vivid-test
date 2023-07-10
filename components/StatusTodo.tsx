import styles from "./StatusTodo.module.css";
import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
export const StatusTodo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.statusTodo}>
      <div className={styles.frame_39}>
        <FigmaLogo
          override={{
            position: "absolute",
            height: "35px",
            width: "35px",
          }}
        />
      </div>
      <div className={styles.frame_8} />
      <div className={styles.frame_7}>
        <p className={styles.doThisTask}>Do this task</p>
        <p className={styles.timeToDoThisTask}>Time to do this task</p>
      </div>
      <img src={img_2585_1.src} className={styles.img_2585_1} />
    </div>
  );
};
