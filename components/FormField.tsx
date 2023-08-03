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
        <div className={styles.placeholder} style={override}>
        <p className={styles.formField}>{field}</p>
        <div className={styles.input}>
          <p className={styles.addText}>{placeholder}</p>
        </div>
       </div> 
      );
    case "Select":
      return (
        <div className={styles.img_2585_1} style={override}>
        <p className={styles.formFieldComponent}>{field}</p>
        <div className={styles.placeholderText}>
          <p className={styles.addTextText}>{placeholder}</p>
          <img className={styles.inputDiv} src={img_2585_1.src} />
        </div>
       </div> 
      );
    default:
      return null;
  }
};
