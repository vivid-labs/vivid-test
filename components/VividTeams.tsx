import styles from "./VividTeams.module.css";

export const VividTeams = ({ override }: { override?: any }) => {
  return (
    <p style={override} className={styles.vividTeams}>
      Vivid Teams
    </p>
  );
};
