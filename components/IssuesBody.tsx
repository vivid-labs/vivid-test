import styles from "./IssuesBody.module.css";
import { Sidebar } from "./Sidebar";
import { IssueRow } from "./IssueRow";
import { Delete } from "./Delete";
import { Logo } from "./Logo";

export const IssuesBody = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.issuesBody} figma-id="7:37:2665">
      <Sidebar
        active="Issues"
        override={{
          height: "100%",
          width: "fit-content",
        }}
        figma-id="7:801:3242"
      />
      <div className={styles.library} figma-id="7:37:10420">
        <div className={styles.header} figma-id="7:38:3560">
          <p className={styles.preview} figma-id="7:38:3650">
            Preview
          </p>
          <p className={styles.name} figma-id="7:38:3652">
            Title
          </p>
          <p className={styles.designer} figma-id="7:38:3655">
            Designer
          </p>
          <p className={styles.developer} figma-id="7:38:3659">
            Dev
          </p>
          <p className={styles.updated} figma-id="7:38:3670">
            Updated
          </p>
          <p className={styles.links} figma-id="7:38:3664">
            Links
          </p>
        </div>
        <IssueRow
          instance={<Delete figma-id="7:" />}
          override={{
            height: "fit-content",
            width: "100%",
          }}
          figma-id="7:801:3252"
        />
        <IssueRow
          instance={<Logo figma-id="7:" />}
          override={{
            height: "fit-content",
            width: "100%",
          }}
          figma-id="7:801:3274"
        />
        <IssueRow
          instance={<Delete figma-id="7:" />}
          override={{
            height: "fit-content",
            width: "100%",
          }}
          figma-id="7:801:3296"
        />
        <IssueRow
          instance={<Delete figma-id="7:" />}
          override={{
            height: "fit-content",
            width: "100%",
          }}
          figma-id="7:801:3318"
        />
      </div>
    </div>
  );
};
