import styles from "./Invite.module.css";
import invite from "./invite.svg";
export const Invite = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className={styles.inviteComponent} src={invite.src} style={override} />
  );
};
