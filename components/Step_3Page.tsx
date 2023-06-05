import styles from "./Step_3Page.module.css";

export const Step_3Page = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.step_3Page}>
      <div className={styles.content}>
        <div className={styles.designSystem}>
          <p className={styles.designSystemText}>
            But wait — this still doesn’t help you build out your design system.{" "}
          </p>
        </div>
        <div className={styles.defineComponents}>
          <p className={styles.defineComponentsText}>
            Vivid lets you define components and variants in Figma, while
            automatically organizing your codebase to match.{" "}
          </p>
        </div>
        <div className={styles.yourFirstVividGenerationimportant}>
          <div className={styles.instructions}>
            <div className={styles.variants}>
              <p className={styles.variantsText}>
                This version of the destination component has three variants for
                different card sizes.{" "}
              </p>
            </div>
            <div className={styles.switch}>
              <p className={styles.switchText}>
                This time, Vivid will generate code for multiple variants and
                allow devs to switch between them.{" "}
              </p>
            </div>
            <div className={styles.generateCode}>
              <p className={styles.generateCodeText}>
                Generate code with Vivid and check out the sandbox!
              </p>
            </div>
            <div className={styles.changeProps}>
              <p className={styles.changePropsText}>
                SOMETHING ABOUT GOING TO A PARTICULAR FILE AND CHANGING THE
                PASSED PROPS
              </p>
            </div>
          </div>
        </div>
        <div className={styles.getStarted}>
          <p className={styles.getStartedText}>
            Vivid lets you focus on creating beautiful, intuitive designs while
            automatically creating a reusable component library for your
            developers in the process.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
