import styles from "./ScreenMobile.module.css";
import { NftCard } from "./NftCard";
export const ScreenMobile = ({ override }: { override?: any }) => {
  const nftCardProps = [
    {
      property_1: "Small",
      nftName: "Distant Galaxy",
      artistAvatarName: true,
      artistName: "MoonDancer",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "402px",
        width: "100%",
        backgroundColor: "rgb(43, 43, 43)",
      },
    },
    {
      property_1: "Small",
      nftName: "Life On Edena",
      artistAvatarName: true,
      artistName: "NebulaKid",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "402px",
        width: "100%",
        backgroundColor: "rgb(43, 43, 43)",
      },
    },
    {
      property_1: "Small",
      nftName: "Life On Edena",
      artistAvatarName: true,
      artistName: "NebulaKid",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "402px",
        width: "100%",
        backgroundColor: "rgb(43, 43, 43)",
      },
    },
  ];
  return (
    <div style={override} className={styles.container}>
    <div className={styles.cardGrid}>
      {nftCardProps.map((props, i) => (
        <NftCard {...props} key={i} />
      ))}
    </div>
   </div> 
  );
};
