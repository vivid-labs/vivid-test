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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        height: "fit-content",
        padding: "40px 195px",
        position: "relative",
        width: "375px",
        backgroundColor: "rgb(59, 59, 59)",
        ...override,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "30px",
          height: "fit-content",
          position: "relative",
          width: "315px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            height: "fit-content",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <div>
            <Storefront
              override={{
                height: "32px",
                width: "32px",
              }}
            />
            <img
              src={nftMarketplace.src}
              style={{
                position: "absolute",
                width: "199.41px",
                left: "44px",
                height: "19.8px",
                top: "8.6px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              height: "fit-content",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                height: "fit-content",
                width: "100%",
                flexShrink: 0,
                color: "rgb(204, 204, 204)",
                fontSize: "16px",
                fontFamily: "Work Sans",
                fontWeight: 400,
                lineHeight: "1.399999976158142em",
              }}
            >
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "15px",
                height: "fit-content",
                position: "relative",
                width: "100%",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  height: "fit-content",
                  width: "100%",
                  flexShrink: 0,
                  color: "rgb(204, 204, 204)",
                  fontSize: "16px",
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  lineHeight: "1.399999976158142em",
                }}
              >
                Join our community
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "10px",
                  width: "fit-content",
                  height: "fit-content",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            height: "fit-content",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              height: "fit-content",
              width: "100%",
              flexShrink: 0,
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
              fontFamily: "Space Mono",
              fontWeight: 700,
              lineHeight: "1.600000023841858em",
            }}
          >
            Explore
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              height: "fit-content",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                flexShrink: 0,
                color: "rgb(204, 204, 204)",
                fontSize: "16px",
                fontFamily: "Work Sans",
                fontWeight: 400,
                lineHeight: "1.399999976158142em",
              }}
            >
              Marketplace
            </p>
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                flexShrink: 0,
                color: "rgb(204, 204, 204)",
                fontSize: "16px",
                fontFamily: "Work Sans",
                fontWeight: 400,
                lineHeight: "1.399999976158142em",
              }}
            >
              Rankings
            </p>
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                flexShrink: 0,
                color: "rgb(204, 204, 204)",
                fontSize: "16px",
                fontFamily: "Work Sans",
                fontWeight: 400,
                lineHeight: "1.399999976158142em",
              }}
            >
              Connect a wallet
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            height: "fit-content",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              height: "fit-content",
              width: "100%",
              flexShrink: 0,
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
              fontFamily: "Space Mono",
              fontWeight: 700,
              lineHeight: "1.600000023841858em",
            }}
          >
            Join our weekly digest
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              height: "fit-content",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                height: "fit-content",
                width: "100%",
                flexShrink: 0,
                color: "rgb(204, 204, 204)",
                fontSize: "16px",
                fontFamily: "Work Sans",
                fontWeight: 400,
                lineHeight: "1.399999976158142em",
              }}
            >
              Get exclusive promotions &amp; updates straight to your inbox.
            </p>
            <SubscribeWidgetMobile />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          height: "fit-content",
          position: "relative",
          width: "315px",
          flexShrink: 0,
        }}
      >
        <img
          src={divider.src}
          style={{
            rotate: "-0.0deg",
            width: "100%",
            height: "0px",
            flexShrink: 0,
          }}
        />
        <p
          style={{
            height: "fit-content",
            width: "100%",
            flexShrink: 0,
            color: "rgb(204, 204, 204)",
            fontSize: "12px",
            fontFamily: "Work Sans",
            fontWeight: 400,
            lineHeight: "1.100000023841858em",
          }}
        >
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </div>
  );
};
