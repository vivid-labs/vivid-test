import styles from "./Step_1.module.css";
import header from "./header.jpg";
import vividLogo from "./vividLogo.png";
import { DestinationNoVariants } from "./DestinationNoVariants";
import destinationNoVariants from "./destinationNoVariants.png";

export const Step_1 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.step_1}>
      <div className={styles.header}>
        <img
          src={header.src}
          className={
            styles.transformRotate0_00degScale111_76pc_266_27pcTranslate_5_26pc_38_74pcTransformOriginTopLeftOpacity_1d2e2e0e68f0404c71db06348976ba084f36ad43a
          }
        />
        <img src={vividLogo.src} className={styles.vividLogo} />
        <p className={styles.welcomeToVividimportant}>Welcome to Vivid!</p>
      </div>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <p className={styles.introductionText}>
            Vivid lets you manage your entire design system right from Figma by
            generating modular, usable frontend code for your developers.{" "}
          </p>
        </div>
        <div className={styles.getStarted}>
          <p className={styles.getStartedText}>Let’s watch the magic happen!</p>
        </div>
        <div className={styles.yourFirstVividVariantsimportant}>
          <DestinationNoVariants
            style={{
              height: "535px",
              width: "380px",
            }}
          />
          <div className={styles.instructions}>
            <div className={styles.takeALook}>
              <p className={styles.takeALookText}>
                Take a look at this card component for a possible vacation
                destination.
              </p>
            </div>
            <div className={styles.generateCode}>
              <p className={styles.generateCodeText}>
                Let’s generate code for it using Vivid!{" "}
              </p>
            </div>
            <div className={styles.openPlugin}>
              <p className={styles.openPluginText}>
                Open the Vivid plugin by selecting and running Vivid from
                “Manage plugins in development” in the plugin menu.{" "}
              </p>
            </div>
            <div className={styles.selectComponent}>
              <p className={styles.selectComponentText}>
                Select the component and hit generate!
              </p>
            </div>
            <div className={styles.sandbox}>
              <p className={styles.sandboxText}>
                After Vivid finishes its generation, hit the sandbox link to see
                the generated code!
              </p>
            </div>
            <div className={styles.sandboxDiv}>
              <p className={styles.sandboxText1}>
                Once the sandbox finishes its setup, click the “dev:3000” tab on
                the right panel to see your preview!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
