import styles from "./GetStarted.module.css";

export const GetStarted = ({ override }: { override?: any }) => {
  return (
    <p style={override} className={styles.getStarted}>
      Get started
    </p>
  );
};
