import styles from "./Content.module.css";
import newWindowIcon from "./newWindowIcon.png";

export const Content = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.content}>
      <div className={styles.componentLibrary}>
        <p className={styles.componentLibraryText}>
          Vivid lets you focus on creating beautiful, intuitive designs while
          automatically creating a reusable component library for your
          developers in the process.{" "}
        </p>
      </div>
      <div className={styles.fullDesign}>
        <p className={styles.fullDesignText}>Let’s try it with a full design</p>
      </div>
      <div className={styles.yourFirstPageWithVividimportant}>
        <div className={styles.instructions}>
          <div className={styles.variants}>
            <p className={styles.variantsText}>
              The landing page below is built from many different components,
              some with variants{" "}
            </p>
          </div>
          <div className={styles.generateCode}>
            <p className={styles.generateCodeText}>
              Generate code with Vivid and check out the sandbox!
            </p>
          </div>
          <div className={styles.newWindow}>
            <p className={styles.icon}>Hit this icon</p>
            <div className={styles.newWindowIcon}>
              <img
                src={newWindowIcon.src}
                className={styles.newWindowIconImage}
              />
            </div>
            <p className={styles.preview}>
              in the top right of the sandbox preview to open the preview in a
              new window!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
