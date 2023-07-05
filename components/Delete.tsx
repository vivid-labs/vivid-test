import styles from "./Delete.module.css";
export const Delete = ({ override }: { override?: any }) => {
  return (
    <p style={override} className={styles.delete}>
      <br />
      dedelete
      <br />
    </p>
  );
};
