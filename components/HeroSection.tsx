import styles from "./HeroSection.module.css";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { HighlightedNft } from "./HighlightedNft";

export const HeroSection = ({
  style,
  screen,
}: {
  style: any;
  screen: string;
}) => {
  switch (screen) {
    case "Dekstop":
      return (
        <div style={style} className={styles.heroSection0}>
          <div className={styles.heroSection1}>
            <div className={styles.heroSection2}>
              <div className={styles.heroSection3}>
                <p className={styles.heroSection4}>
                  Discover digital art & Collect NFTs
                </p>
                <p className={styles.heroSection5}>
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <Button
                property_1="Secondary/Filled"
                hasLeftIcon={true}
                leftIcon={<RocketLaunch />}
                hasText={true}
                text="Get Started"
              />
              <div className={styles.heroSection6}>
                <div className={styles.heroSection7}>
                  <p className={styles.heroSection8}>240k+ </p>
                  <p className={styles.heroSection9}>Total Sale</p>
                </div>
                <div className={styles.heroSection10}>
                  <p className={styles.heroSection11}>100k+</p>
                  <p className={styles.heroSection12}>Auctions</p>
                </div>
                <div className={styles.heroSection13}>
                  <p className={styles.heroSection14}>240k+</p>
                  <p className={styles.heroSection15}>Artists</p>
                </div>
              </div>
            </div>
            <HighlightedNft />
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div style={style} className={styles.heroSection16}>
          <div className={styles.heroSection17}>
            <div className={styles.heroSection18}>
              <div className={styles.heroSection19}>
                <p className={styles.heroSection20}>
                  Discover digital art & Collect NFTs
                </p>
                <p className={styles.heroSection21}>
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <Button
                property_1="Secondary/Filled"
                hasLeftIcon={true}
                leftIcon={<RocketLaunch />}
                hasText={true}
                text="Get Started"
                style={{}}
              />
              <div className={styles.heroSection22}>
                <div className={styles.heroSection23}>
                  <p className={styles.heroSection24}>240k+ </p>
                  <p className={styles.heroSection25}>Total Sale</p>
                </div>
                <div className={styles.heroSection26}>
                  <p className={styles.heroSection27}>100k+</p>
                  <p className={styles.heroSection28}>Auctions</p>
                </div>
                <div className={styles.heroSection29}>
                  <p className={styles.heroSection30}>240k+</p>
                  <p className={styles.heroSection31}>Artists</p>
                </div>
              </div>
            </div>
            <HighlightedNft style={{}} />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.heroSection32}>
          <div className={styles.heroSection33}>
            <div className={styles.heroSection34}>
              <div className={styles.heroSection35}>
                <p className={styles.heroSection36}>
                  Discover digital art & Collect NFTs
                </p>
                <p className={styles.heroSection37}>
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <HighlightedNft
                style={{
                  height: "348px",
                  width: "100%",
                }}
              />
              <Button
                property_1="Secondary/Filled"
                hasLeftIcon={true}
                leftIcon={<RocketLaunch />}
                hasText={true}
                text="Get Started"
                style={{
                  height: "60px",
                  width: "100%",
                }}
              />
              <div className={styles.heroSection38}>
                <div className={styles.heroSection39}>
                  <p className={styles.heroSection40}>240k+ </p>
                  <p className={styles.heroSection41}>Total Sale</p>
                </div>
                <div className={styles.heroSection42}>
                  <p className={styles.heroSection43}>100k+</p>
                  <p className={styles.heroSection44}>Auctions</p>
                </div>
                <div className={styles.heroSection45}>
                  <p className={styles.heroSection46}>240k+</p>
                  <p className={styles.heroSection47}>Artists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
