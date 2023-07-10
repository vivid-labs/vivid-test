import styles from "./Wallet.module.css";
import wallet from "./wallet.svg";
export const Wallet = ({ override }: { override?: any }) => {
  return <img src={wallet.src} style={override} className={styles.wallet} />;
};
