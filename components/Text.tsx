import styles from "./Text.module.css";

export const Text = ({ override }: { override?: any }) => {
  return (
    <p style={override} className={styles.text}>
      asdasdasdasdasdasdasd
    </p>
  );
};
