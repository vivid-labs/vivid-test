import styles from "./Button.module.css";
export const Button = ({
  override,
  status,
}: {
  override?: any;
  status: string;
}) => {
  switch (status) {
    case "Failure":
      return (
        <div style={override} className={styles.button} figma-id="3:2025:832">
          <p className={styles.failureimportant} figma-id="3:2025:831">
            Failure!
          </p>
        </div>
      );
    case "Success":
      return (
        <div
          style={override}
          className={styles.buttonComponent}
          figma-id="3:2025:842"
        >
          <p className={styles.success} figma-id="3:2025:843">
            Success
          </p>
        </div>
      );
    default:
      return null;
  }
};
