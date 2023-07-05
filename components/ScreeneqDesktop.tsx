import styles from "./ScreeneqDesktop.module.css";
import { Storefront } from "./Storefront";
import nftMarketplace from "./nftMarketplace.svg";
import { DiscordLogo } from "./DiscordLogo";
import { YoutubeLogo } from "./YoutubeLogo";
import { TwitterLogo } from "./TwitterLogo";
import { InstagramLogo } from "./InstagramLogo";
import { SubscribeForm } from "./SubscribeForm";
import divider from "./divider.svg";

export const ScreeneqDesktop = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.screeneqDesktop}>
      <div className={styles.footerInfo}>
        <div className={styles.nftMarketplaceInfo}>
          <div>
            <Storefront
              override={{
                height: "32px",
                width: "32px",
              }}
            />
            <img src={nftMarketplace.src} className={styles.nftMarketplace} />
          </div>
          <div className={styles.additionalInfo}>
            <p className={styles.nftMarketplaceUiCreatedWithAnimaForFigma}>
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div className={styles.communityInfo}>
              <p className={styles.joinOurCommunity}>Join our community</p>
              <div className={styles.icons}>
                <DiscordLogo />
                <YoutubeLogo />
                <TwitterLogo />
                <InstagramLogo />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.explore}>
          <p className={styles.exploreText}>Explore</p>
          <div className={styles.pages}>
            <p className={styles.marketplace}>Marketplace</p>
            <p className={styles.rankings}>Rankings</p>
            <p className={styles.connectAWallet}>Connect a wallet</p>
          </div>
        </div>
        <div className={styles.subscribe}>
          <p className={styles.joinOurWeeklyDigest}>Join our weekly digest</p>
          <div className={styles.subscribeFormAndInfo}>
            <p
              className={
                styles.getExclusivePromotionsAndUpdatesStraightToYourInbox
              }
            >
              Get exclusive promotions &amp; updates straight to your inbox.
            </p>
            <SubscribeForm property_1="Default" email="Enter your email here" />
          </div>
        </div>
      </div>
      <div className={styles.frame_239}>
        <img src={divider.src} className={styles.divider} />
        <p className={styles.nftMarketUseThisTemplateFreely}>
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </div>
  );
};
