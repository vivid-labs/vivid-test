import styles from "./ScreeneqMobile.module.css";
import { Storefront } from "./Storefront";
import nftMarketplace from "./nftMarketplace.svg";
import { DiscordLogo } from "./DiscordLogo";
import { YoutubeLogo } from "./YoutubeLogo";
import { TwitterLogo } from "./TwitterLogo";
import { InstagramLogo } from "./InstagramLogo";
import { SubscribeWidgetMobile } from "./SubscribeWidgetMobile";
import divider from "./divider.svg";
export const ScreeneqMobile = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.screeneqMobile}>
    <div className={styles.footerInfo}>
      <div className={styles.nftMarketplaceInfo}>
        <div>
          <Storefront
            override={{
              height: "32px",
              width: "32px",
            }}
          />
          <img src={nftMarketplace.src} className={styles.nftMarketplaceImage} />
        </div>
        <div className={styles.additionalInfo}>
          <p className={styles.nftMarketplaceFigmaInfo}>
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className={styles.communityInfo}>
            <p className={styles.joinCommunity}>Join our community</p>
            <div className={styles.socialIcons}>
              <DiscordLogo
                override={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <YoutubeLogo
                override={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <TwitterLogo
                override={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <InstagramLogo
                override={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.exploreSection}>
        <p className={styles.exploreText}>Explore</p>
        <div className={styles.pagesContainer}>
          <p className={styles.marketplacePage}>Marketplace</p>
          <p className={styles.rankingsPage}>Rankings</p>
          <p className={styles.connectWalletPage}>Connect a wallet</p>
        </div>
      </div>
      <div className={styles.subscribeSection}>
        <p className={styles.weeklyDigestText}>Join our weekly digest</p>
        <div className={styles.subscribeFormAndInfo}>
          <p
            className={
              styles.exclusivePromotionsText
            }
          >
            Get exclusive promotions &amp; updates straight to your inbox.
          </p>
          <SubscribeWidgetMobile />
        </div>
      </div>
    </div>
    <div className={styles.frame_239}>
      <img src={divider.src} className={styles.dividerImage} />
      <p className={styles.nftMarketUseTemplateText}>
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
   </div> 
  );
};
