import styles from "./IssueRow.module.css";
import { Delete } from "./components";
import { RowDivider } from "./components";
import { Profile } from "./components";
import { GitHubLogo } from "./components";
import { FigmaLogo } from "./components";
export const IssueRow = ({
  override,
  instance,
}: {
  override?: any;
  instance: any;
}) => {
  return (
    <div style={override} className={styles.issueRow} figma-id="7:38:2291">
      <div className={styles.left} figma-id="7:38:2214">
        {instance}
        <RowDivider
          colors="Web"
          override={{
            height: "100%",
            width: "0px",
          }}
          figma-id="7:801:2325"
        />
        <p className={styles.card} figma-id="7:38:2217">
          Card{" "}
        </p>
      </div>
      <div className={styles.right} figma-id="7:38:2218">
        <Profile figma-id="7:801:2527" />
        <Profile figma-id="7:801:2530" />
        <RowDivider
          colors="Web"
          override={{
            height: "100%",
            width: "0px",
          }}
          figma-id="7:801:2330"
        />
        <p className={styles.text4h} figma-id="7:38:2219">
          4h{" "}
        </p>
        <RowDivider
          colors="Web"
          override={{
            height: "100%",
            width: "0px",
          }}
          figma-id="7:801:2332"
        />
        <div className={styles.links} figma-id="7:38:3446">
          <GitHubLogo figma-id="7:801:2336" />
          <FigmaLogo figma-id="7:801:2334" />
        </div>
      </div>
    </div>
  );
};
