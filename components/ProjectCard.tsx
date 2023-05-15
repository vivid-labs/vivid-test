import styles from "./ProjectCard.module.css";
import vivid_eae313a48883a46e7a2a60ee806e73a8052191be from "./eae313a48883a46e7a2a60ee806e73a8052191be.png";

export const ProjectCard = () => {
  return (
    <div className={styles.projectCard0}>
      <img
        src={vivid_eae313a48883a46e7a2a60ee806e73a8052191be.src}
        className={styles.projectCard1}
      />
      <div className={styles.projectCard2}>
        <p className={styles.projectCard3}>PJ name</p>
        <p className={styles.projectCard4}>Address</p>
      </div>
    </div>
  );
};
