import styles from "./Button.module.css";
export const Button = ({
  override,
  status,
}: {
  override?: any;
  status: string;
}) => {
  return (
    <div style={override} className={styles.button} figma-id="3:2025:832">
      <p className={styles.failureimportant} figma-id="3:2025:831">
        Failure!
      </p>
    </div>
  );
};
