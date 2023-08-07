import styles from "./NftCardsSection.module.css";
import { NftCard } from "./NftCard";

export const NftCardsSection = ({
  override,
  screen,
}: {
  override?: React.CSSProperties;
  screen: string;
}) => {
  const nftCardProps = [
    {
      property_1: "Default",
      nftName: "Distant Galaxy",
      additionalInfo: true,
      artistName: "MoonDancer",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        backgroundColor: "rgb(43, 43, 43)",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "Life On Edena",
      additionalInfo: true,
      artistName: "NebulaKid",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        backgroundColor: "rgb(43, 43, 43)",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "AstroFiction",
      additionalInfo: true,
      artistName: "Spaceone",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgb(43, 43, 43)",
      },
    },
  ];
  const nftCardProps1 = [
    {
      property_1: "Default",
      nftName: "Distant Galaxy",
      additionalInfo: true,
      artistName: "MoonDancer",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        backgroundColor: "rgb(43, 43, 43)",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "Life On Edena",
      additionalInfo: true,
      artistName: "NebulaKid",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        backgroundColor: "rgb(43, 43, 43)",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "AstroFiction",
      additionalInfo: true,
      artistName: "Spaceone",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgb(43, 43, 43)",
      },
    },
  ];
  const nftCardProps2 = [
    {
      property_1: "Default",
      nftName: "Distant Galaxy",
      additionalInfo: true,
      artistName: "MoonDancer",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        backgroundColor: "rgb(43, 43, 43)",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "Life On Edena",
      additionalInfo: true,
      artistName: "NebulaKid",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        backgroundColor: "rgb(43, 43, 43)",
        flex: "1 1 0%",
      },
    },
    {
      property_1: "Default",
      nftName: "AstroFiction",
      additionalInfo: true,
      artistName: "Spaceone",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "469px",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgb(43, 43, 43)",
      },
    },
  ];
  const nftCardProps3 = [
    {
      property_1: "Small",
      nftName: "Distant Galaxy",
      additionalInfo: true,
      artistName: "MoonDancer",
      nftName: true,
      artistAvatarName: true,
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
      additionalInfo: true,
      artistName: "NebulaKid",
      nftName: true,
      artistAvatarName: true,
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
      additionalInfo: true,
      artistName: "NebulaKid",
      nftName: true,
      artistAvatarName: true,
      priceNumber: "1.63 ETH",
      bidNumber: "0.33 wETH",
      override: {
        height: "402px",
        width: "100%",
        backgroundColor: "rgb(43, 43, 43)",
      },
    },
  ];
  switch (screen) {
    case "Desktop":
      return (
        <div className={styles.nftCardsSectionComponent} style={override}>
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
          <div className={styles.nftCardsRowDiv_1}>
            {nftCardProps2.map((props, i) => (
              <NftCard {...props} key={i} />
            ))}
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div className={styles.nftCardsSectionComponent_1} style={override}>
          <div className={styles.nftCardsRowDiv_2}>
            <DistantGalaxyNftCard />
            <NftCardPropertyDescription />
          </div>
          <div className={styles.nftCardsRowDiv_3}>
            <NftCardComponent />
            <LifeOnEdenaNftCard />
          </div>
          <div className={styles.nftCardsRowDiv_4}>
            <NftCard1 />
            <LifeOnEdenaNftCardComponent />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div className={styles.nftCardsSectionComponent_2} style={override}>
          <div className={styles.nftCardsRowDiv_5}>
            {nftCardProps3.map((props, i) => (
              <NftCard {...props} key={i} />
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

const DistantGalaxyNftCard = () => (
  <NftCard
    property_1="Default"
    nftName="Distant Galaxy"
    additionalInfo={true}
    artistName="MoonDancer"
    nftName={true}
    artistAvatarName={true}
    priceNumber="1.63 ETH"
    bidNumber="0.33 wETH"
    override={{
      height: "469px",
      backgroundColor: "rgb(43, 43, 43)",
      flex: "1 1 0%",
    }}
  />
);

const NftCardPropertyDescription = () => (
  <NftCard
    property_1="Default"
    nftName="Life On Edena"
    additionalInfo={true}
    artistName="NebulaKid"
    nftName={true}
    artistAvatarName={true}
    priceNumber="1.63 ETH"
    bidNumber="0.33 wETH"
    override={{
      height: "469px",
      backgroundColor: "rgb(43, 43, 43)",
      flex: "1 1 0%",
    }}
  />
);

const NftCardComponent = () => (
  <NftCard
    property_1="Default"
    nftName="Distant Galaxy"
    additionalInfo={true}
    artistName="MoonDancer"
    nftName={true}
    artistAvatarName={true}
    priceNumber="1.63 ETH"
    bidNumber="0.33 wETH"
    override={{
      height: "469px",
      backgroundColor: "rgb(43, 43, 43)",
      flex: "1 1 0%",
    }}
  />
);

const LifeOnEdenaNftCard = () => (
  <NftCard
    property_1="Default"
    nftName="Life On Edena"
    additionalInfo={true}
    artistName="NebulaKid"
    nftName={true}
    artistAvatarName={true}
    priceNumber="1.63 ETH"
    bidNumber="0.33 wETH"
    override={{
      height: "469px",
      backgroundColor: "rgb(43, 43, 43)",
      flex: "1 1 0%",
    }}
  />
);

const NftCard1 = () => (
  <NftCard
    property_1="Default"
    nftName="Distant Galaxy"
    additionalInfo={true}
    artistName="MoonDancer"
    nftName={true}
    artistAvatarName={true}
    priceNumber="1.63 ETH"
    bidNumber="0.33 wETH"
    override={{
      height: "469px",
      backgroundColor: "rgb(43, 43, 43)",
      flex: "1 1 0%",
    }}
  />
);

const LifeOnEdenaNftCardComponent = () => (
  <NftCard
    property_1="Default"
    nftName="Life On Edena"
    additionalInfo={true}
    artistName="NebulaKid"
    nftName={true}
    artistAvatarName={true}
    priceNumber="1.63 ETH"
    bidNumber="0.33 wETH"
    override={{
      height: "469px",
      backgroundColor: "rgb(43, 43, 43)",
      flex: "1 1 0%",
    }}
  />
);
