import styles from "./ScreenDesktop.module.css";
import { Button } from "./Button";
import { ArrowRight } from "./ArrowRight";
import { NftCard } from "./NftCard";
export const ScreenDesktop = ({ override }: { override?: any }) => {
  const nftCardProps = [
    {
      property_1: "Default",
      nftName: "Distant Galaxy",
      artistAvatarName: true,
      artistName: "MoonDancer",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "Life On Edena",
      artistAvatarName: true,
      artistName: "NebulaKid",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "AstroFiction",
      artistAvatarName: true,
      artistName: "Spaceone",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
  ];
  const nftCardProps1 = [
    {
      property_1: "Default",
      nftName: "Distant Galaxy",
      artistAvatarName: true,
      artistName: "MoonDancer",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "Life On Edena",
      artistAvatarName: true,
      artistName: "NebulaKid",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "AstroFiction",
      artistAvatarName: true,
      artistName: "Spaceone",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
  ];
  const nftCardProps2 = [
    {
      property_1: "Default",
      nftName: "Distant Galaxy",
      artistAvatarName: true,
      artistName: "MoonDancer",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "Life On Edena",
      artistAvatarName: true,
      artistName: "NebulaKid",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "AstroFiction",
      artistAvatarName: true,
      artistName: "Spaceone",
      additionalInfo: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
  ];
  return (
    <div style={override} className={styles.screenDesktop}>
    <div className={styles.headlineAndButton}>
      <div className={styles.headline}>
        <p className={styles.artistInfo}>More from this artist</p>
      </div>
      <Button
        property_1="Secondary/Outlined"
        hasLeftIcon={true}
        leftIcon={<ArrowRight />}
        hasText={true}
        text="Go To Artist Page"
        override={{
          padding: "0px 50px",
          width: "fit-content",
          height: "60px",
        }}
      />
    </div>
    <div className={styles.nftCardsRow}>
      {nftCardProps.map((props, i) => (
        <NftCard {...props} key={i} />
      ))}
    </div>
    <div className={styles.nftCardsRowDiv}>
      {nftCardProps1.map((props, i) => (
        <NftCard {...props} key={i} />
      ))}
    </div>
    <div className={styles.nftCardsRowDiv1}>
      {nftCardProps2.map((props, i) => (
        <NftCard {...props} key={i} />
      ))}
    </div>
   </div> 
  );
};
