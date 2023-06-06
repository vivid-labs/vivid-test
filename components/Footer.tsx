import styles from "./Footer.module.css";
import { Storefront } from "./Storefront";
import nftMarketplace from "./nftMarketplace.svg";
import { DiscordLogo } from "./DiscordLogo";
import { YoutubeLogo } from "./YoutubeLogo";
import { TwitterLogo } from "./TwitterLogo";
import { InstagramLogo } from "./InstagramLogo";
import { SubscribeForm } from "./SubscribeForm";
import dividerImage1 from "./dividerImage1.svg";
import dividerImage from "./dividerImage.svg";
import { SubscribeWidgetMobile } from "./SubscribeWidgetMobile";
import divider from "./divider.svg";

export const Footer = ({ style, screen }: { style?: any; screen: string }) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={style} className={styles.footer}>
          <div className={styles.footerInfo}>
            <div className={styles.nftMarketplaceInfo}>
              <div>
                <Storefront
                  style={{
                    height: "32px",
                    width: "32px",
                  }}
                />
                <img
                  src={nftMarketplace.src}
                  className={styles.nftMarketplace}
                />
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
              <p className={styles.joinOurWeeklyDigest}>
                Join our weekly digest
              </p>
              <div className={styles.subscribeFormAndInfo}>
                <p
                  className={
                    styles.getExclusivePromotionsAndUpdatesStraightToYourInbox
                  }
                >
                  Get exclusive promotions &amp; updates straight to your inbox.
                </p>
                <SubscribeForm
                  property_1="Default"
                  email="Enter your email here"
                />
              </div>
            </div>
          </div>
          <div className={styles.frame_239}>
            <img src={dividerImage1.src} className={styles.divider} />
            <p className={styles.nftMarketUseThisTemplateFreely}>
              Ⓒ NFT Market. Use this template freely.
            </p>
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div style={style} className={styles.footerComponent}>
          <div className={styles.footerInfoDiv}>
            <div className={styles.nftMarketplaceInfoDiv}>
              <div>
                <Storefront
                  style={{
                    height: "32px",
                    width: "32px",
                  }}
                />
                <img
                  src={nftMarketplace.src}
                  className={styles.nftMarketplaceImage}
                />
              </div>
              <div className={styles.additionalInfoDiv}>
                <p
                  className={
                    styles.nftMarketplaceUiCreatedWithAnimaForFigmaText
                  }
                >
                  NFT marketplace UI created with Anima for Figma.
                </p>
                <div className={styles.communityInfoDiv}>
                  <p className={styles.joinOurCommunityText}>
                    Join our community
                  </p>
                  <div className={styles.iconsDiv}>
                    <DiscordLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                    <YoutubeLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                    <TwitterLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                    <InstagramLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.exploreDiv}>
              <p className={styles.exploreText1}>Explore</p>
              <div className={styles.pagesDiv}>
                <p className={styles.marketplaceText}>Marketplace</p>
                <p className={styles.rankingsText}>Rankings</p>
                <p className={styles.connectAWalletText}>Connect a wallet</p>
              </div>
            </div>
            <div className={styles.subscribeDiv}>
              <p className={styles.joinOurWeeklyDigestText}>
                Join our weekly digest
              </p>
              <div className={styles.subscribeFormAndInfoDiv}>
                <p
                  className={
                    styles.getExclusivePromotionsAndUpdatesStraightToYourInboxText
                  }
                >
                  Get exclusive promotions &amp; updates straight to your inbox.
                </p>
                <SubscribeForm
                  property_1="Default"
                  email="Enter your email here"
                  style={{
                    height: "60px",
                    width: "420px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.frame_239Div}>
            <img src={dividerImage.src} className={styles.dividerImage} />
            <p className={styles.nftMarketUseThisTemplateFreelyText}>
              Ⓒ NFT Market. Use this template freely.
            </p>
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.footerComponent1}>
          <div className={styles.footerInfoDiv1}>
            <div className={styles.nftMarketplaceInfoDiv1}>
              <div>
                <Storefront
                  style={{
                    height: "32px",
                    width: "32px",
                  }}
                />
                <img
                  src={nftMarketplace.src}
                  className={styles.nftMarketplaceImage1}
                />
              </div>
              <div className={styles.additionalInfoDiv1}>
                <p
                  className={
                    styles.nftMarketplaceUiCreatedWithAnimaForFigmaText1
                  }
                >
                  NFT marketplace UI created with Anima for Figma.
                </p>
                <div className={styles.communityInfoDiv1}>
                  <p className={styles.joinOurCommunityText1}>
                    Join our community
                  </p>
                  <div className={styles.iconsDiv1}>
                    <DiscordLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                    <YoutubeLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                    <TwitterLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                    <InstagramLogo
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.exploreDiv1}>
              <p className={styles.exploreText2}>Explore</p>
              <div className={styles.pagesDiv1}>
                <p className={styles.marketplaceText1}>Marketplace</p>
                <p className={styles.rankingsText1}>Rankings</p>
                <p className={styles.connectAWalletText1}>Connect a wallet</p>
              </div>
            </div>
            <div className={styles.subscribeDiv1}>
              <p className={styles.joinOurWeeklyDigestText1}>
                Join our weekly digest
              </p>
              <div className={styles.subscribeFormAndInfoDiv1}>
                <p
                  className={
                    styles.getExclusivePromotionsAndUpdatesStraightToYourInboxText1
                  }
                >
                  Get exclusive promotions &amp; updates straight to your inbox.
                </p>
                <SubscribeWidgetMobile />
              </div>
            </div>
          </div>
          <div className={styles.frame_239Div1}>
            <img src={divider.src} className={styles.dividerImage1} />
            <p className={styles.nftMarketUseThisTemplateFreelyText1}>
              Ⓒ NFT Market. Use this template freely.
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
