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
        <div style={override} className={styles.formField}>
        <p className={styles.fieldTitle}>{field}</p>
        <div className={styles.inputContainer}>
          <p className={styles.placeholderText}>{placeholder}</p>
        </div>
       </div>)
      );
    case "Select":
      return (
       (<div style={override} className={styles.formFieldComponent}>
        <p className={styles.fieldTitleText}>{field}</p>
        <div className={styles.selectContainer}>
          <p className={styles.selectPlaceholderText}>{placeholder}</p>
          <img src={img_2585_1.src} className={styles.selectImage} />
        </div>
       </div> 
      );
    default:
      return null;
  }
};
