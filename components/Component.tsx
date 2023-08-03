import styles from "./Component.module.css";
export const Component = ({ override }: { override?: any }) => {
  return <div className={styles.componentPrimary} style={override} />;
};
