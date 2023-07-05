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
    <div style={override} className={styles.screeneqContainer}>
    <div className={styles.footerContainer}>
      <div className={styles.nftMarketplaceContainer}>
        <div>
          <Storefront
            override={{
              height: "32px",
              width: "32px",
            }}
          />
          <img src={nftMarketplace.src} className={styles.nftMarketplaceImage} />
        </div>
        <div className={styles.additionalContainer}>
          <p className={styles.nftMarketplaceText}>
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className={styles.communityContainer}>
            <p className={styles.joinCommunityText}>Join our community</p>
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
      <div className={styles.exploreContainer}>
        <p className={styles.exploreText}>Explore</p>
        <div className={styles.pagesContainer}>
          <p className={styles.marketplaceText}>Marketplace</p>
          <p className={styles.rankingsText}>Rankings</p>
          <p className={styles.connectWalletText}>Connect a wallet</p>
        </div>
      </div>
      <div className={styles.subscribeContainer}>
        <p className={styles.digestText}>Join our weekly digest</p>
        <div className={styles.subscribeFormContainer}>
          <p
            className={
              styles.promotionsText
            }
          >
            Get exclusive promotions &amp; updates straight to your inbox.
          </p>
          <SubscribeWidgetMobile />
        </div>
      </div>
    </div>
    <div className={styles.frameContainer}>
      <img src={divider.src} className={styles.dividerImage} />
      <p className={styles.templateText}>
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
   </div> 
  );
};
