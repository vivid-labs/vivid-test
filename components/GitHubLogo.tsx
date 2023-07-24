import styles from "./GitHubLogo.module.css";
import gitHubImage from "./gitHubImage.png";
export const GitHubLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.gitHubLogo} figma-id="7:38:2251">
      <img
        src={gitHubImage.src}
        className={styles.gitHubImage}
        figma-id="7:38:2242"
      />
    </div>
  );
};
