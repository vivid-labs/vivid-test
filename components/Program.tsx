import styles from "./Program.module.css";
import group_10 from "./group_10.svg";
export const Program = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.program} style={override}>
    <div className={styles.ticketIcon}>
      <img className={styles.ticket} src={group_10.src} />
    </div>
   </div> 
  );
};
