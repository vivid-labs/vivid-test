import styles from "./NftMarketplace.module.css";
export const NftMarketplace = ({ override }: { override?: any }) => {
  return (
    <p style={override} className={styles.nftMarketplace}>
      NFT Marketplace
    </p>
  );
};
