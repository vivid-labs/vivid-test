import styles from "./Content.module.css";
import content from "./content.jpg";
import { FormField } from "./FormField";
import { Button } from "./Button";
export const Content = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.content}>
      <img
        src={content.src}
        className={
          styles.objectFitCoverOpacity_1d2e2e0e68f0404c71db06348976ba084f36ad43a
        }
      />
      <div className={styles.frame_2}>
        <div className={styles.frame_3}>
          <p className={styles.getStartedWithVividTeamsimportant}>
            Get started with Vivid Teams!
          </p>
        </div>
        <FormField
          type="TextInput"
          field="Company Name"
          placeholder="Pied Piper"
          override={{
            height: "fit-content",
            width: "100%",
          }}
        />
        <FormField
          type="Select"
          field="CSS Solution"
          placeholder="Select one"
          override={{
            height: "fit-content",
            width: "100%",
          }}
        />
        <Button
          type="Primary"
          text="Start my free trial!"
          override={{
            height: "fit-content",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
