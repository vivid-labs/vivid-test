import styles from "./OrganizationSignUp.module.css";
import { NavBar } from "./NavBar";
import content from "./content.jpg";
import { FormField } from "./FormField";
import { Button } from "./Button";
export const OrganizationSignUp = ({ override }: { override?: any }) => {
  return (
    <div className={styles.organizationSignUp} style={override}>
      <NavBar type="White" />
      <div className={styles.content}>
        <img className={styles.image} src={content.src} />
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
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};
