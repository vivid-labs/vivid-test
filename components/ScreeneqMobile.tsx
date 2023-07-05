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
    <div style={override} className={styles.mainContainer}>
    <div className={styles.footerContainer}>
      <div className={styles.nftMarketplaceContainer}>
        <div>
          <Storefront
            override={{
              height: "32px",
              width: "32px",
            }}
          />
          <img src={nftMarketplace.src} className={styles.nftMarketplaceLogo} />
        </div>
        <div className={styles.additionalInfoContainer}>
          <p className={styles.infoText}>
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className={styles.communityInfoContainer}>
            <p className={styles.joinCommunityText}>Join our community</p>
            <div className={styles.iconsContainer}>
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
      <div className={styles.explorerContainer}>
        <p className={styles.explorerText}>Explore</p>
        <div className={styles.pagesContainer}>
          <p className={styles.marketplaceText}>Marketplace</p>
          <p className={styles.rankingsText}>Rankings</p>
          <p className={styles.connectWalletText}>Connect a wallet</p>
        </div>
      </div>
      <div className={styles.subscribeContainer}>
        <p className={styles.joinDigestText}>Join our weekly digest</p>
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
    <div className={styles.dividerContainer}>
      <img src={divider.src} className={styles.dividerImage} />
      <p className={styles.templateText}>
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
   </div> 
  );
};
