import styles from "./GetStartedWithVividimportant.module.css";

export const GetStartedWithVividimportant = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <p style={override} className={styles.getStartedWithVividimportant}>
      Get Started with Vivid!
    </p>
  );
};
