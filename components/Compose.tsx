import styles from "./Compose.module.css";
import compose from "./compose.svg";
export const Compose = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
     className={styles.composeImage}
     src={compose.src}
     style={override}
   /> 
  );
};
