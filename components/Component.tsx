import styles from "./Component.module.css";
export const Component = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.component} figma-id="3:756:1897" />
  );
};
