import styles from "./OrganizationSignUp.module.css";
import { NavBar } from "./NavBar";
import content from "./content.jpg";
import { FormField } from "./FormField";
import { Button } from "./Button";
export const OrganizationSignUp = ({ override }: { override?: any }) => {
  return (
    <div className={styles.orgSignUp} style={override}>
    <NavBar type="White" />
    <div className={styles.pageContent}>
      <img className={styles.heroImage} src={content.src} />
      <div className={styles.mainFrame}>
        <div className={styles.headerFrame}>
          <p className={styles.importantText}>
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
