import styles from "./Content.module.css";
import content from "./content.jpg";
import { Button } from "./Button";
export const Content = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.content}>
    <img
      src={content.src}
      className={
        styles.image
      }
    />
    <div className={styles.frameWrapper}>
      <div className={styles.title}>
        <p className={styles.text}>
          Get started with Vivid Teams!
        </p>
      </div>
      <div className={styles.optionsWrapper}>
        <p
          className={
            styles.laterButton
          }
        >
          Vivid will now take you to GitHub and ask you to do some stuff. When
          you’re done with that stuff, come back to edit this copy to reflect
          what actually needs to get done, make this styling a bit prettier,
          and then move on!
        </p>
      </div>
      <div className={styles.githubButton}>
        <Button
          type="Secondary"
          text="I'll do this later"
          override={{
            height: "fit-content",
            flex: "1 1 0%",
            minWidth: "0px",
          }}
        />
        <Button
          type="Primary"
          text="Take me to GitHub!"
          override={{
            height: "fit-content",
            flex: "1 1 0%",
            minWidth: "0px",
          }}
        />
      </div>
    </div>
   </div> 
  );
};
