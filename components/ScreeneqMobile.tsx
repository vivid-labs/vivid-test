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
    <div className={styles.footer}>
      <div className={styles.marketplaceInfo}>
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
          <p className={styles.nftMarketplaceUi}>
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className={styles.communityInfo}>
            <p className={styles.joinCommunity}>Join our community</p>
            <div className={styles.icons}>
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
      <div className={styles.explore}>
        <p className={styles.exploreText}>Explore</p>
        <div className={styles.pages}>
          <p className={styles.marketplace}>Marketplace</p>
          <p className={styles.rankings}>Rankings</p>
          <p className={styles.connectWallet}>Connect a wallet</p>
        </div>
      </div>
      <div className={styles.subscribe}>
        <p className={styles.joinDigest}>Join our weekly digest</p>
        <div className={styles.subscribeForm}>
          <p
            className={
              styles.exclusivePromotions
            }
          >
            Get exclusive promotions &amp; updates straight to your inbox.
          </p>
          <SubscribeWidgetMobile />
        </div>
      </div>
    </div>
    <div className={styles.frame}>
      <img src={divider.src} className={styles.divider} />
      <p className={styles.nftMarketUseTemplate}>
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
   </div> 
  );
};
