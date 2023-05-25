import styles from "./DiscoverMoreNfTs.module.css";
import { Button } from "./Button";
import { Eye } from "./Eye";
import { NftCard } from "./NftCard";

export const DiscoverMoreNfTs = ({ screen }: { screen: string }) => {
  switch (screen) {
    case "Desktop":
      return (
        <div className={styles.discoverMoreNfTs0}>
          <div className={styles.discoverMoreNfTs1}>
            <div className={styles.discoverMoreNfTs2}>
              <p className={styles.discoverMoreNfTs3}>Discover More NFTs</p>
              <p className={styles.discoverMoreNfTs4}>
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye />}
              hasText={true}
              text="See All"
            />
          </div>
          <div className={styles.discoverMoreNfTs5}>
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div className={styles.discoverMoreNfTs6}>
          <div className={styles.discoverMoreNfTs7}>
            <div className={styles.discoverMoreNfTs8}>
              <p className={styles.discoverMoreNfTs9}>Discover More NFTs</p>
              <p className={styles.discoverMoreNfTs10}>
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye />}
              hasText={true}
              text="See All"
            />
          </div>
          <div className={styles.discoverMoreNfTs11}>
            <NftCard
              property_1="Default"
              nftName="Distant Galaxy"
              artistAvatarName={true}
              artistName="MoonDancer"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
            <NftCard
              property_1="Default"
              nftName="Life on Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div className={styles.discoverMoreNfTs12}>
          <div className={styles.discoverMoreNfTs13}>
            <div className={styles.discoverMoreNfTs14}>
              <p className={styles.discoverMoreNfTs15}>Discover More NFTs</p>
              <p className={styles.discoverMoreNfTs16}>
                Explore new trending NFTs
              </p>
            </div>
          </div>
          <div className={styles.discoverMoreNfTs17}>
            <div className={styles.discoverMoreNfTs18}>
              <NftCard
                property_1="Small"
                nftName="Distant Galaxy"
                artistAvatarName={true}
                artistName="MoonDancer"
                additionalInfo={true}
                priceNumber="1.63 ETH"
                bidNumber="0.33 wETH"
              />
            </div>
            <div className={styles.discoverMoreNfTs19}>
              <NftCard
                property_1="Small"
                nftName="Life on Edena"
                artistAvatarName={true}
                artistName="NebulaKid"
                additionalInfo={true}
                priceNumber="1.63 ETH"
                bidNumber="0.33 wETH"
              />
            </div>
            <div className={styles.discoverMoreNfTs20}>
              <NftCard
                property_1="Small"
                nftName="AstroFiction"
                artistAvatarName={true}
                artistName="Spaceone"
                additionalInfo={true}
                priceNumber="1.63 ETH"
                bidNumber="0.33 wETH"
              />
            </div>
          </div>
          <div className={styles.discoverMoreNfTs21}>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye />}
              hasText={true}
              text="See All"
            />
          </div>
        </div>
      );
  }
};
