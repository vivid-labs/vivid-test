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
        styles.coverImage
      }
    />
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        <p className={styles.title}>
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
