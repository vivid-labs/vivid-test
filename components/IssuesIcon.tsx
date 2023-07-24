import styles from "./IssuesIcon.module.css";
export const IssuesIcon = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.issuesIcon} figma-id="7:37:2351">
      <div className={styles.outerCircle} figma-id="7:37:2339" />
      <div className={styles.innerDot} figma-id="7:37:2340" />
    </div>
  );
};
