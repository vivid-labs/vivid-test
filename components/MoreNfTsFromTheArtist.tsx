import styles from "./MoreNfTsFromTheArtist.module.css";
import { Button } from "./Button";
import { ArrowRight } from "./ArrowRight";
import { NftCard } from "./NftCard";

export const MoreNfTsFromTheArtist = ({ screen }: { screen: string }) => {
  switch (screen) {
    case "Desktop":
      return (
        <div className={styles.moreNfTsFromTheArtist0}>
          <div className={styles.moreNfTsFromTheArtist1}>
            <div className={styles.moreNfTsFromTheArtist2}>
              <p className={styles.moreNfTsFromTheArtist3}>
                More from this artist
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<ArrowRight />}
              hasText={true}
              text="Go To Artist Page"
            />
          </div>
          <div className={styles.moreNfTsFromTheArtist4}>
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
              nftName="Life On Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
            <NftCard
              property_1="Default"
              nftName="AstroFiction"
              artistAvatarName={true}
              artistName="Spaceone"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
          <div className={styles.moreNfTsFromTheArtist5}>
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
              nftName="Life On Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
            <NftCard
              property_1="Default"
              nftName="AstroFiction"
              artistAvatarName={true}
              artistName="Spaceone"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
          <div className={styles.moreNfTsFromTheArtist6}>
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
              nftName="Life On Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
            <NftCard
              property_1="Default"
              nftName="AstroFiction"
              artistAvatarName={true}
              artistName="Spaceone"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
        </div>
      );
      break;
    case "Tablet":
      return (
        <div className={styles.moreNfTsFromTheArtist7}>
          <div className={styles.moreNfTsFromTheArtist8}>
            <div className={styles.moreNfTsFromTheArtist9}>
              <p className={styles.moreNfTsFromTheArtist10}>
                More from this artist
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<ArrowRight />}
              hasText={true}
              text="Go To Artist Page"
            />
          </div>
          <div className={styles.moreNfTsFromTheArtist11}>
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
              nftName="Life On Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
          <div className={styles.moreNfTsFromTheArtist12}>
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
              nftName="Life On Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
          <div className={styles.moreNfTsFromTheArtist13}>
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
              nftName="Life On Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
            />
          </div>
        </div>
      );
      break;
    case "Mobile":
      return (
        <div className={styles.moreNfTsFromTheArtist14}>
          <div className={styles.moreNfTsFromTheArtist15}>
            <p className={styles.moreNfTsFromTheArtist16}>
              More from this artist
            </p>
            <div className={styles.moreNfTsFromTheArtist17}>
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
                nftName="Life On Edena"
                artistAvatarName={true}
                artistName="NebulaKid"
                additionalInfo={true}
                priceNumber="1.63 ETH"
                bidNumber="0.33 wETH"
              />
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<ArrowRight />}
              hasText={true}
              text="Go To Artist Page"
            />
          </div>
        </div>
      );
      break;
  }
};
