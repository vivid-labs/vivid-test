import styles from "./Contacts.module.css";
import contacts from "./contacts.svg";
export const Contacts = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
      className={styles.contactsComponent}
      src={contacts.src}
      style={override}
    />
  );
};
