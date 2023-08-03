import styles from "./FormField.module.css";
import img_2585_1 from "./img_2585_1.png";
export const FormField = ({
  override,
  type,
  field,
  placeholder,
}: {
  override?: any;
  type: string;
  field: string;
  placeholder: string;
}) => {
  switch (type) {
    case "TextInput":
      return (
        <div className={styles.formField} style={override}>
          <p className={styles.addText}>{field}</p>
          <div className={styles.input}>
            <p className={styles.placeholder}>{placeholder}</p>
          </div>
        </div>
      );
    case "Select":
      return (
        <div className={styles.formFieldComponent} style={override}>
          <p className={styles.addTextText}>{field}</p>
          <div className={styles.inputDiv}>
            <p className={styles.placeholderText}>{placeholder}</p>
            <img className={styles.img_2585_1} src={img_2585_1.src} />
          </div>
        </div>
      );
    default:
      return null;
  }
};
